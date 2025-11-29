# 🚀 Quick Start Guide - Grace Li Portfolio

## Fastest Path to Deployment (5 Minutes)

### Step 1: Setup EmailJS (2 minutes)
1. Go to [emailjs.com](https://www.emailjs.com) and create free account
2. Add email service (Gmail recommended)
3. Create email template
4. Copy your credentials

### Step 2: Add Environment Variables (1 minute)
Create `.env.local` file in project root:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 3: Deploy to Vercel (2 minutes)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo
4. Add environment variables in Vercel settings
5. Click Deploy

**Done! Your portfolio is live! 🎉**

---

## Content Customization (Quick Reference)

### Update Your Info
**File:** `config/siteConfig.ts`
```typescript
email: "your-email@example.com"
location: "Your City, State"
links: {
  linkedin: "https://linkedin.com/in/your-profile"
  github: "https://github.com/yourusername"
}
```

### Add Projects
**File:** `config/projectsData.ts`
```typescript
{
  id: "new-project",
  title: "Project Name",
  description: "Short description",
  technologies: ["React", "Node.js"],
  github: "https://github.com/...",
  featured: true
}
```

### Update Skills
**File:** `config/skillsData.ts`
- Add new skills
- Update education
- Modify experience

### Add Events
**File:** `config/eventsData.ts`
```typescript
{
  title: "Conference Name",
  date: "March 2024",
  category: "conference"
}
```

---

## Testing Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000

# Build for production (test)
npm run build

# Run production build locally
npm start
```

---

## Adding Images

### Profile Photo
1. Add to: `public/images/profile/your-photo.jpg`
2. Update `siteConfig.ts` if needed

### Project Screenshots
1. Add to: `public/images/projects/`
   - `jobportal.png`
   - `vitality-hub.png`
   - `ecommerce.png`
   - `covilla.png`
2. Images automatically appear (no code changes needed!)

### Resume PDF
1. Add to: `public/resume/Grace_Li_Resume.pdf`
2. Download button works automatically

---

## Common Tasks

### Change Colors
**File:** `styles/colors.ts`
- Modify purple and teal values
- Changes apply everywhere

### Update Dark Mode
**Component:** `components/layout/Header.tsx`
- Dark mode toggle already implemented
- Persists in localStorage

### Add New Page
1. Create `app/new-page/page.tsx`
2. Add to navigation in `Header.tsx`
3. Add metadata layout if needed

---

## Deployment Checklist

**Before Deploy:**
- [ ] EmailJS configured
- [ ] Environment variables added
- [ ] Content reviewed
- [ ] Test build: `npm run build`
- [ ] Images added (optional)

**After Deploy:**
- [ ] Test contact form
- [ ] Check all pages
- [ ] Verify mobile responsive
- [ ] Test dark mode
- [ ] Share on LinkedIn!

---

## Troubleshooting

**Contact form not working?**
→ Check EmailJS environment variables

**Build fails?**
→ Run `npm run build` locally to see error

**Images not showing?**
→ Check file paths in `public/images/`

**Dark mode not persisting?**
→ Clear browser cache and try again

---

## Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm start               # Run production build
npm run lint            # Check for errors

# Git
git add .
git commit -m "message"
git push

# Deployment will trigger automatically on Vercel/Netlify
```

---

## Support

- **Detailed Docs:** See `README.md`
- **Phase 13 Info:** See `PHASE-13-COMPLETE.md`
- **Deployment:** See `DEPLOYMENT.md`
- **EmailJS:** See `EMAILJS-SETUP.md`

---

## That's It! 🎉

You're ready to go live. Questions? Check the documentation files above.

**Now deploy and share your amazing portfolio with the world! 🚀**

