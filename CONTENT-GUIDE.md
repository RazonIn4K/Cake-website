# Content Management Guide

## 📝 How to Update Website Content

This guide explains how to update your bilingual cooking website content.

## 🗂️ Content Structure

```
src/content/
├── ofertas/          # Service offerings
│   ├── es/          # Spanish offers
│   └── en/          # English offers
└── galeria/         # Image galleries
    ├── es/          # Spanish gallery
    └── en/          # English gallery
```

## 🛠️ Adding New Services/Offers

### 1. Create Spanish Version
Create file: `src/content/ofertas/es/new-service.md`

```markdown
---
title: "Nombre del Servicio"
subtitle: "Subtítulo Descriptivo"
description: "Descripción completa del servicio que aparecerá en la tarjeta."
basePrice: 50
pppNotes: "Precios ajustados por país: MX 70%, CO 60%, AR 50%"
buttonText: "Texto del Botón"
buttonAction: "gumroad"  # or "whatsapp" or "contact"
buttonLink: "https://gumroad.com/l/your-product"
order: 4  # Display order (1, 2, 3, etc.)
category: "workshop"  # workshop, digital, consultation, community
---

Contenido adicional del servicio (opcional).
```

### 2. Create English Version
Create file: `src/content/ofertas/en/new-service.md`

```markdown
---
title: "Service Name"
subtitle: "Descriptive Subtitle"
description: "Complete service description that will appear on the card."
basePrice: 50
pppNotes: "Regional pricing available: MX 70%, CO 60%, AR 50%"
buttonText: "Button Text"
buttonAction: "gumroad"
buttonLink: "https://gumroad.com/l/your-product"
order: 4
category: "workshop"
---

Additional service content (optional).
```

## 🖼️ Managing Gallery Images

### Update Gallery Content
Edit these files:
- `src/content/galeria/es/pasteles-destacados.md`
- `src/content/galeria/en/featured-cakes.md`

### Add New Images
1. Add images to `public/images/` folder
2. Update gallery markdown files with new image data:

```markdown
---
title: "Gallery Title"
images:
  - src: "/images/new-cake.jpg"
    alt: "Description of the cake"
    caption: "Optional caption"
    category: "wedding"  # optional category
order: 1
---
```

## 💰 Pricing Guidelines

### Base Pricing Structure
- **Workshops**: $19-$39 USD
- **Digital Products**: $9-$29 USD  
- **Consultations**: $99-$199 USD
- **Community**: $9-$19 USD/month

### PPP (Purchasing Power Parity) Multipliers
- **Mexico**: 70% of base price
- **Colombia**: 60% of base price
- **Argentina**: 50% of base price
- **US/Europe**: 100% (full price)

### Button Actions
- `gumroad`: Links to Gumroad product page
- `whatsapp`: Opens WhatsApp with pre-filled message
- `contact`: Links to contact form on page

## 🔗 Link Management

### Gumroad Links
Format: `https://gumroad.com/l/your-product-slug`

### WhatsApp Links
Format: `https://wa.me/PHONENUMBER?text=MESSAGE`
- Replace `PHONENUMBER` with your number (no + sign)
- Replace `MESSAGE` with URL-encoded message

## 🌐 SEO Best Practices

### Title Guidelines
- Keep under 60 characters
- Include main keyword
- Be descriptive and compelling

### Description Guidelines  
- Keep under 160 characters
- Include call-to-action
- Mention key benefits

### Image Alt Text
- Describe what's in the image
- Include relevant keywords naturally
- Keep under 125 characters

## 📱 Mobile Optimization

All content is automatically optimized for mobile, but keep in mind:
- Short, punchy headlines work better
- Break up long paragraphs
- Use bullet points for lists
- Keep button text concise

## 🔄 Deployment Process

1. **Edit content** in your preferred editor
2. **Test locally**: `npm run dev`
3. **Build**: `npm run build`
4. **Commit changes**: `git add . && git commit -m "Update content"`
5. **Deploy**: `git push origin main`
6. **Vercel auto-deploys** your changes

## ✅ Content Checklist

Before publishing new content:

- [ ] Spanish and English versions created
- [ ] All required frontmatter fields filled
- [ ] Pricing follows PPP guidelines
- [ ] Links tested and working
- [ ] Images optimized and uploaded
- [ ] SEO fields completed
- [ ] Mobile preview checked
- [ ] Spelling and grammar reviewed

## 🆘 Troubleshooting

### Content Not Showing
- Check frontmatter syntax (YAML format)
- Ensure file is in correct directory
- Verify order number is unique
- Check for typos in field names

### Images Not Loading
- Verify image is in `public/images/` folder
- Check file path starts with `/images/`
- Ensure image format is supported (jpg, png, webp)
- Check file size (keep under 1MB for web)

### Form Not Working
- Verify Formspree form ID is correct
- Check form action URL
- Ensure required fields are marked
- Test with valid email address

## 📞 Support

For technical issues:
1. Check browser console for errors
2. Verify all links are working
3. Test form submissions
4. Check mobile responsiveness

Remember: Your Obsidian vault remains your source of truth - use it for planning and organizing, then copy finalized content to the website files.