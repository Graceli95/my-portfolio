# Deployment Guide - Grace Li Portfolio

This guide will walk you through deploying your portfolio to Vercel (recommended) or other platforms.

## Prerequisites

✅ Completed portfolio with all phases done
✅ Git repository (GitHub, GitLab, or Bitbucket)
✅ EmailJS account set up (see `EMAILJS-SETUP.md`)

## Option 1: Deploy to Vercel (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and offers the best integration.

### Step 1: Push to GitHub

```bash
# Initialize git if you haven't already
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Portfolio ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select your portfolio repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Add Environment Variables**
   
   Click "Environment Variables" and add:
   
   ```
   Key: NEXT_PUBLIC_EMAILJS_SERVICE_ID
   Value: your_service_id_from_emailjs
   
   Key: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   Value: your_template_id_from_emailjs
   
   Key: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   Value: your_public_key_from_emailjs
   ```
   
   **Important**: Make sure to add these as "Environment Variables" not "Secrets"

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - Your site will be live at `your-project-name.vercel.app`

### Step 3: Configure Custom Domain (Optional)

1. In your Vercel project, go to "Settings" → "Domains"
2. Add your custom domain (e.g., `graceli.dev`)
3. Follow Vercel's instructions to configure DNS
4. Wait for SSL certificate to be automatically generated

### Step 4: Verify Deployment

Visit your deployed site and test:
- ✅ All pages load correctly
- ✅ Dark mode toggle works
- ✅ Navigation works
- ✅ Contact form sends emails
- ✅ Mobile responsive
- ✅ No console errors

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub
(Same as Vercel Step 1)

### Step 2: Deploy to Netlify

1. **Go to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/login with GitHub

2. **Add New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add the same EmailJS variables as Vercel

5. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `your-site-name.netlify.app`

## Option 3: Self-Hosted (VPS/Cloud)

### Requirements
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache as reverse proxy

### Deployment Steps

1. **Clone Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd YOUR_REPO
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create Environment Variables**
   ```bash
   nano .env.local
   ```
   
   Add:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Build**
   ```bash
   npm run build
   ```

5. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx** (example)
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Post-Deployment Checklist

### Required
- [ ] All pages load without errors
- [ ] Contact form sends emails successfully
- [ ] Dark mode toggle works
- [ ] Mobile responsive design verified
- [ ] All navigation links work
- [ ] Social media links are correct
- [ ] Resume download works (if PDF added)

### Recommended
- [ ] Set up custom domain
- [ ] Enable HTTPS (auto on Vercel/Netlify)
- [ ] Test on multiple devices and browsers
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Test page load speeds
- [ ] Verify meta tags with social media sharing debugger

### SEO & Analytics Setup

1. **Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your domain
   - Verify ownership
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Google Analytics (Optional)**
   - Create Google Analytics account
   - Get tracking ID
   - Add to your Next.js app via `_app.tsx` or Google Tag Manager

3. **Social Media Preview**
   - Test OpenGraph tags: [opengraph.xyz](https://www.opengraph.xyz/)
   - Test Twitter Cards: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

## Continuous Deployment

Once set up, both Vercel and Netlify offer automatic deployments:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. Vercel/Netlify automatically detects the push and redeploys
4. Check deployment status in their dashboard

## Troubleshooting

### Contact Form Not Working
- ✅ Check environment variables are set correctly
- ✅ Verify EmailJS credentials
- ✅ Check browser console for errors
- ✅ Test EmailJS directly on their website

### Build Fails
- ✅ Check Node.js version (18+ required)
- ✅ Run `npm run build` locally to see errors
- ✅ Check for TypeScript errors
- ✅ Verify all dependencies are installed

### Images Not Loading
- ✅ Check file paths are correct
- ✅ Ensure images are in `public/` directory
- ✅ Verify image filenames match in config files

### Dark Mode Not Persisting
- ✅ Check if localStorage is available
- ✅ Verify browser supports dark mode
- ✅ Check browser console for errors

### Slow Performance
- ✅ Run Lighthouse audit
- ✅ Optimize images (compress, use WebP)
- ✅ Check for console errors
- ✅ Verify code splitting is working

## Performance Optimization Tips

1. **Images**
   - Use WebP or AVIF format
   - Compress images (keep under 500KB)
   - Use Next.js Image component for automatic optimization

2. **Fonts**
   - Use system fonts when possible
   - Limit custom fonts to 2-3 variants
   - Use font-display: swap

3. **Code**
   - Already optimized with Next.js code splitting
   - Static generation enabled for all pages
   - Minimal JavaScript bundle sizes

## Updates & Maintenance

### Updating Content

1. **Projects**: Edit `config/projectsData.ts`
2. **About**: Edit `config/skillsData.ts` and `config/siteConfig.ts`
3. **FAQ**: Edit `config/faqData.ts`
4. **Events**: Edit `config/eventsData.ts`

After editing, commit and push to trigger auto-deployment.

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Or update specific package
npm install next@latest

# Test locally
npm run dev
npm run build

# If everything works, commit and push
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

## Support & Resources

- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **EmailJS Documentation**: [emailjs.com/docs](https://www.emailjs.com/docs/)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Security Notes

1. **Never commit** `.env.local` to Git
2. Keep EmailJS credentials private
3. Use environment variables for all sensitive data
4. Enable HTTPS (automatic on Vercel/Netlify)
5. Keep dependencies updated for security patches

---

**Your portfolio is now ready for the world! 🚀**

If you encounter any issues, check the troubleshooting section or refer to the official documentation.

