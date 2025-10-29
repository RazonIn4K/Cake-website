# Deployment Guide - Bilingual Cooking Website

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Domain name (optional, Vercel provides free subdomain)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial bilingual cooking website"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Astro and configure build settings
5. Click "Deploy"

### Step 3: Configure Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Go to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### Step 4: Update Configuration
1. Update `astro.config.mjs` with your actual domain:
   ```js
   site: 'https://your-actual-domain.com'
   ```
2. Update form action in `ContactForm.astro`:
   - Sign up for [Formspree](https://formspree.io) (free tier available)
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID
3. Update WhatsApp phone number in all components

## 📧 Form Setup (Formspree)

1. Go to [formspree.io](https://formspree.io) and create account
2. Create a new form
3. Copy the form ID (looks like `xpzgkqyw`)
4. Replace `YOUR_FORM_ID` in `ContactForm.astro` with your actual ID
5. Test form submission

## 📱 WhatsApp Integration

Update phone numbers in these files:
- `src/components/ContactForm.astro`
- `src/pages/index.astro`
- `src/pages/en/index.astro`
- `src/content/ofertas/es/asesoria-express.md`
- `src/content/ofertas/en/express-consultation.md`

Replace `1234567890` with actual WhatsApp number (include country code, no + sign).

## 🖼️ Adding Real Images

1. Add cake photos to `public/images/` directory
2. Name them: `cake1.jpg`, `cake2.jpg`, etc.
3. Update gallery content in:
   - `src/content/galeria/es/pasteles-destacados.md`
   - `src/content/galeria/en/featured-cakes.md`
4. Remove placeholder styling from `Gallery.astro` component

## 🔄 Content Updates

### Adding New Offers
1. Create new `.md` files in:
   - `src/content/ofertas/es/` (Spanish)
   - `src/content/ofertas/en/` (English)
2. Follow existing frontmatter structure
3. Deploy changes via Git push

### Updating Existing Content
1. Edit `.md` files in `src/content/`
2. Commit and push changes
3. Vercel will auto-deploy

## 🌐 SEO Optimization

### Update Structured Data
Edit `src/layouts/Layout.astro` to include:
- Actual business name
- Real phone number
- Actual address
- Correct opening hours

### Add Google Analytics (Optional)
1. Get Google Analytics tracking ID
2. Add to `src/layouts/Layout.astro` in `<head>` section

## 🔧 Environment Variables

For production, set these in Vercel dashboard:
- `FORMSPREE_FORM_ID`: Your Formspree form ID
- `WHATSAPP_NUMBER`: Your WhatsApp number
- `BUSINESS_EMAIL`: Your business email

## 📊 Performance Monitoring

The site is optimized for:
- ✅ Core Web Vitals
- ✅ Mobile-first design
- ✅ SEO best practices
- ✅ Accessibility (WCAG 2.1 AA)

Monitor performance at:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Vercel Analytics (built-in)

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management Workflow

1. **Edit content** in Obsidian vault (your source of truth)
2. **Copy content** to corresponding `.md` files in `src/content/`
3. **Test locally** with `npm run dev`
4. **Commit and push** to GitHub
5. **Auto-deploy** via Vercel

This maintains your Obsidian vault as the primary content source while keeping the website updated.