#!/usr/bin/env bash
# Remove metadata from images and videos in a target directory.
# Originals are archived in a timestamped folder for safekeeping.

set -euo pipefail

TARGET_DIR="${1:-img}"
TARGET_DIR="${TARGET_DIR%/}"

if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Target directory \"$TARGET_DIR\" does not exist." >&2
  exit 1
fi

timestamp="$(date +"%Y%m%d-%H%M%S")"
archive_root="${TARGET_DIR}/_originals"
archive_dir="${archive_root}/${timestamp}"
mkdir -p "$archive_dir"

has_ffmpeg=false
if command -v ffmpeg >/dev/null 2>&1; then
  has_ffmpeg=true
fi

process_image() {
  local src="$1" dst="$2"
  if command -v exiftool >/dev/null 2>&1; then
    exiftool -quiet -all= -tagsFromFile @ -Orientation -n -o "$dst" "$src" >/dev/null
    if [[ -s "$dst" ]]; then
      return 0
    fi
  fi
  python3 - "$src" "$dst" <<'PY'
import sys
from pathlib import Path
from PIL import Image, ImageOps

src_path = Path(sys.argv[1])
dst_path = Path(sys.argv[2])

with Image.open(src_path) as img:
    img = ImageOps.exif_transpose(img)
    fmt = (img.format or src_path.suffix.replace('.', '') or 'JPEG').upper()
    params = {}
    if fmt in {"JPEG", "JPG"}:
        params = {"format": "JPEG", "quality": 92, "optimize": True}
    elif fmt == "PNG":
        params = {"format": "PNG", "optimize": True}
    elif fmt == "WEBP":
        params = {"format": "WEBP", "quality": 90}
    else:
        params = {"format": fmt}
    img.save(dst_path, **params)
PY
}

process_video() {
  local src="$1" dst="$2"
  if [[ "$has_ffmpeg" == "true" ]]; then
    ffmpeg -loglevel error -y -i "$src" -map_metadata -1 -c copy "$dst"
  else
    echo "Skipping video \"$src\" (ffmpeg not available)" >&2
    return 1
  fi
}

shopt -s nullglob
processed=0
skipped=0

for path in "$TARGET_DIR"/*; do
  [[ -f "$path" ]] || continue
  filename="$(basename "$path")"
  ext="${filename##*.}"
  lower_ext="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"

  # Skip archive and hidden files
  if [[ "$filename" == _originals* || "$filename" == .* ]]; then
    continue
  fi

  dest_path="${TARGET_DIR}/${filename}"
  archive_path="${archive_dir}/${filename}"

  mv "$path" "$archive_path"

  case "$lower_ext" in
    jpg|jpeg|png|webp|tif|tiff|heic|heif)
      if process_image "$archive_path" "$dest_path"; then
        ((processed++))
      else
        mv "$archive_path" "$dest_path"
        ((skipped++))
      fi
      ;;
    mp4|mov|m4v|webm|mkv|avi)
      if process_video "$archive_path" "$dest_path"; then
        ((processed++))
      else
        mv "$archive_path" "$dest_path"
        ((skipped++))
      fi
      ;;
    *)
      # Unknown extension, restore original
      mv "$archive_path" "$dest_path"
      ((skipped++))
      ;;
  esac
done

echo "Processed files: $processed"
echo "Skipped files:   $skipped"
echo "Originals archived in: $archive_dir"
