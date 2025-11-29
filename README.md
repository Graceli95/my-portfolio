# Grace Li - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Design Theme

- **Colors:** Purple & Teal with Dark Mode support
- **Animation:** Moderate (smooth transitions, interactive cards)
- **Architecture:** Agile and easily customizable

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
my-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
├── config/                # Centralized configuration files
│   ├── siteConfig.ts     # Personal info, contact details
│   ├── projectsData.ts   # All projects data
│   ├── skillsData.ts     # Skills, education, experience
│   ├── faqData.ts        # FAQ questions and answers
│   └── eventsData.ts     # Events, conferences, hackathons
├── styles/
│   └── colors.ts         # Centralized color theme
├── public/
│   ├── images/
│   │   ├── projects/     # Project screenshots (add yours here!)
│   │   └── profile/      # Your photo
│   └── resume/           # Your PDF resume
└── ...config files
```

## 🎯 How to Customize

### 1. Update Your Information

Edit `config/siteConfig.ts` to update:
- Name, email, location
- Social links (LinkedIn, GitHub)
- Hero section content
- About section bio

### 2. Add/Update Projects

Edit `config/projectsData.ts` to:
- Add new projects
- Update project descriptions
- Change tech stacks
- Add/remove GitHub or demo links

### 3. Change Color Theme

Edit `styles/colors.ts` to change the entire site's colors:
- Primary color (currently Purple)
- Secondary color (currently Teal)
- Gradient combinations
- Dark mode colors

The changes will automatically apply throughout the site!

### 4. Update Skills & Experience

Edit `config/skillsData.ts` to:
- Add new skills
- Update education
- Add certifications
- Modify work experience

### 5. Add FAQ Answers

Edit `config/faqData.ts` to add or modify FAQ questions.

### 6. Add Events

Edit `config/eventsData.ts` to add conferences, hackathons, or community events you attend.

## 📸 Adding Project Screenshots

1. Add your screenshots to `public/images/projects/` with these exact filenames:
   - `jobportal.png`
   - `vitality-hub.png`
   - `ecommerce.png`
   - `covilla.png`

2. Recommended specs:
   - Format: PNG or JPG
   - Size: 1200x800px or 1920x1080px
   - Keep under 500KB

Screenshots will automatically appear on your portfolio!

## 📄 Adding Your Resume

Place your PDF resume in `public/resume/Grace-Li-Resume.pdf`

## 📧 Contact Form Setup (EmailJS)

The contact form uses EmailJS to send emails. To enable it:

1. **Read the Setup Guide**: See `EMAILJS-SETUP.md` for detailed instructions
2. **Create EmailJS Account**: Sign up at [emailjs.com](https://www.emailjs.com)
3. **Configure Service**: Add your email service (Gmail recommended)
4. **Create Template**: Set up an email template
5. **Add Environment Variables**: Create `.env.local` with:
   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
6. **Restart Server**: `npm run dev`

**Note**: Without EmailJS configuration, the form will show an error. Follow `EMAILJS-SETUP.md` for step-by-step setup.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy
5. **Add Environment Variables** in Vercel:
   - Go to Settings > Environment Variables
   - Add EmailJS credentials:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
6. Redeploy after adding environment variables

## ✨ Features

- 🎨 Modern, responsive design with dark mode
- 📱 Mobile-first approach with excellent touch targets
- ⚡ Optimized performance (all pages < 115KB first load)
- 🔍 SEO optimized with metadata and sitemap
- ♿ Accessible (WCAG compliant)
- 📧 Working contact form with EmailJS
- 🎭 Beautiful loading states and error handling
- 🌐 PWA ready with web manifest

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Email:** EmailJS (for contact form)
- **Deployment:** Vercel (recommended)

## 📦 Dependencies

```json
{
  "react": "^18",
  "react-dom": "^18",
  "next": "^15",
  "typescript": "^5",
  "tailwindcss": "^3.4.1",
  "@emailjs/browser": "^4.4.1",
  "lucide-react": "^0.554.0"
}
```

## 🧪 Testing & Quality

- ✅ Zero linting errors
- ✅ TypeScript strict mode
- ✅ Production build tested
- ✅ Responsive design verified
- ✅ Dark mode tested
- ✅ Touch targets meet accessibility standards (44x44px mobile)

## 📊 Performance Metrics

All pages are optimized for fast loading:
- Homepage: 115 KB first load
- About: 111 KB
- Projects: 110 KB
- FAQ: 110 KB
- Events: 109 KB
- Contact: 108 KB

**All pages pre-rendered as static content for maximum performance!**

## 🎨 Color Palette

- **Primary Purple:** #a855f7
- **Secondary Teal:** #14b8a6
- **Dark Mode:** Enabled with class-based toggling

## 📝 License

Personal portfolio - All rights reserved.

## 👤 Contact

- **Email:** graceli9095@gmail.com
- **LinkedIn:** [grace-li-com](https://www.linkedin.com/in/grace-li-com/)
- **GitHub:** [@Graceli95](https://github.com/Graceli95)

---

Built with ❤️ by Grace Li

