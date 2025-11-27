# Events Images Setup Guide

This guide will help you add images to your events (Year Up Student Ambassador, Commit Your Code Conference, and Hackathon).

## ✅ What's Been Set Up

1. **Event interface updated** - Now supports `images` array
2. **Events page UI enhanced** - Horizontal scroll gallery for 3-4 images per event
3. **Directory created** - `/public/images/events/` folder ready for your photos
4. **Templates added** - Event templates in `config/eventsData.ts` ready to fill in

## 📸 Step 1: Prepare Your Images

### Image Requirements
- **Format**: JPG or PNG
- **Recommended size**: 1200px max width for optimal web performance
- **Aspect ratio**: 4:3 or 16:9 works best
- **File size**: Compress to under 500KB each for fast loading

### How Many Images?
- **Recommended**: 3-4 images per event
- **Best practice**: Show different aspects (arrival → participation → outcome)

## 📁 Step 2: Upload Images

1. **Locate your event photos** on your computer
2. **Name them descriptively**:
   ```
   year-up-ambassador-1.jpg
   year-up-ambassador-2.jpg
   year-up-ambassador-3.jpg
   
   commit-your-code-1.jpg
   commit-your-code-2.jpg
   commit-your-code-3.jpg
   
   hackathon-name-1.jpg
   hackathon-name-2.jpg
   hackathon-name-3.jpg
   hackathon-name-4.jpg
   ```

3. **Copy images** to: `/public/images/events/`

## 🎯 Step 3: Add Event Details

Open `config/eventsData.ts` and uncomment/fill in the templates:

### Year Up Student Ambassador

Already exists! Just uncomment and add images:

```typescript
{
  id: "placeholder-1",
  title: "Year Up Student Ambassador",
  category: "community",
  date: "Sep 2025 - present",
  location: "Phoenix, AZ",
  description: "Representing the Phoenix market as a Student Ambassador...",
  images: [
    "/images/events/year-up-ambassador-1.jpg",
    "/images/events/year-up-ambassador-2.jpg",
    "/images/events/year-up-ambassador-3.jpg",
  ],
},
```

### Commit Your Code Conference

Uncomment and fill in details:

```typescript
{
  id: "commit-your-code-2024",
  title: "Commit Your Code Conference",
  category: "conference",
  date: "November 15-16, 2024", // Replace with actual date
  location: "Phoenix, AZ", // Replace with actual location
  description: "Attended comprehensive sessions on modern web development, cloud computing, and AI integration. Networked with industry professionals and learned about emerging technologies shaping the future of software development.",
  link: "https://conference-website.com", // Optional
  images: [
    "/images/events/commit-your-code-1.jpg",
    "/images/events/commit-your-code-2.jpg",
    "/images/events/commit-your-code-3.jpg",
    "/images/events/commit-your-code-4.jpg"
  ],
},
```

### Hackathon

Uncomment and fill in details:

```typescript
{
  id: "hackathon-2024",
  title: "Tech Hackathon 2024", // Replace with actual name
  category: "hackathon",
  date: "October 20-22, 2024", // Replace with actual date
  location: "Phoenix, AZ", // Replace with actual location
  description: "Built a full-stack application in 48 hours with a team of 4 developers. Used React, Node.js, and MongoDB to create a real-time collaboration tool. Presented to judges and won honorable mention.",
  link: "https://github.com/your-hackathon-project", // Optional: GitHub or demo
  images: [
    "/images/events/hackathon-1.jpg",
    "/images/events/hackathon-2.jpg",
    "/images/events/hackathon-3.jpg",
    "/images/events/hackathon-4.jpg", // Optional 4th image
  ],
},
```

## 📝 Description Writing Tips

### Good Event Descriptions Should Include:

**For Conferences:**
- Sessions attended
- Key speakers or topics
- Main takeaways
- Networking opportunities

**For Hackathons:**
- What you built
- Team size
- Technologies used
- Challenges overcome
- Results/awards

**For Community Events:**
- Your role
- Impact created
- Skills developed
- People you collaborated with

## 🎨 Image Suggestions

### What to Show (3-4 images per event):

**Image 1**: You at the event (arrival, badge, venue)
- Shows you were there
- Professional appearance

**Image 2**: Active participation (coding, workshop, listening)
- Shows engagement
- Action shots work great

**Image 3**: Presentation/collaboration (team photo, presenting, demo)
- Shows teamwork
- Demonstrates your work

**Image 4** (Optional): Outcome (award, final product, group celebration)
- Shows results
- Memorable moments

## 🚀 Step 4: Test Your Events Page

1. Make sure dev server is running: `npm run dev`
2. Navigate to: `http://localhost:3000/events`
3. Check that:
   - Images load properly
   - Horizontal scroll works
   - Images look good on mobile and desktop
   - Hover effects work

## 🎯 Quick Checklist

- [ ] Images optimized and named correctly
- [ ] Images uploaded to `/public/images/events/`
- [ ] Event details filled in `config/eventsData.ts`
- [ ] Images array uncommented and paths added
- [ ] Tested on dev server
- [ ] Images scroll horizontally
- [ ] Mobile responsive

## 💡 Pro Tips

1. **Optimize images** before uploading (use tools like TinyPNG or ImageOptim)
2. **Choose high-quality photos** that show you professionally
3. **Tell a story** with your image order (chronological flow)
4. **Mix photo types** (close-up, wide shot, action, team)
5. **Keep descriptions concise** but informative (2-3 sentences)

## 🔧 Troubleshooting

**Images not showing?**
- Check file paths are correct (case-sensitive)
- Ensure images are in `/public/images/events/`
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)

**Images too large?**
- Compress using online tools
- Resize to max 1200px width

**Scroll not working?**
- Check that you have 3+ images
- Try different browser
- Clear cache

## 📞 Need Help?

If you run into issues, check:
1. Browser console for errors (F12)
2. File paths match exactly
3. Images are valid JPG/PNG files

---

**Ready to add your events?** Just follow steps 2-4 above! 🎉

