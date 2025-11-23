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

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Environment Variables

For contact form (EmailJS):
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Add these in Vercel dashboard under Settings > Environment Variables.

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** EmailJS (for contact form)

## 📦 Dependencies

```json
{
  "react": "^18",
  "react-dom": "^18",
  "next": "^15",
  "typescript": "^5",
  "tailwindcss": "^3.4.1"
}
```

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

