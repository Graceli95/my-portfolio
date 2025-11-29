# Project Images Directory

This directory contains screenshots and images for portfolio projects.

## File Naming Convention

For projects with multiple images, use this naming pattern:
```
projectname-main.png          # Main/thumbnail image (shows on card)
projectname-feature1.png      # Additional screenshots
projectname-feature2.png
projectname-feature3.png
```

### Example: AI-Powered JobPortal Platform
```
jobportal-main.png           # Main dashboard
jobportal-dashboard.png      # Employer dashboard
jobportal-search.png         # Job search interface
jobportal-matching.png       # AI matching results
```

## Current Projects

### 1. AI-Powered JobPortal Platform (`jobportal`)
**Current images:**
- `jobportal.png` - Main screenshot

**Recommended additional screenshots:**
- Employer Dashboard UI (your key contribution)
- Job search interface
- AI candidate matching results
- Job listing details

---

### 2. Vitality Hub (`vitality-hub`)
**Current images:**
- `vitality-hub.png` - Analytics dashboard

**Recommended additional screenshots:**
- Workout logging interface
- Progress tracking view
- Goal management screen

---

### 3. Eyeglass E-commerce (`ecommerce`)
**Current images:**
- `ecommerce.png` - Product catalog

**Recommended additional screenshots:**
- Shopping cart with items
- Product detail view
- Checkout process

---

### 4. Covilla Travel Agency (`covilla`)
**Current images:**
- `covilla.png` - Main page

**Recommended additional screenshots:**
- Destination details page
- Itinerary planner
- Destination comparison view

---

## How to Add Multiple Images to a Project

### Step 1: Add Image Files
Place your screenshots in this directory with clear naming:
```
/public/images/projects/
  vitality-hub-main.png
  vitality-hub-analytics.png
  vitality-hub-goals.png
```

### Step 2: Update projectsData.ts
Edit `/config/projectsData.ts`:

```typescript
{
  id: "vitality-hub",
  title: "Vitality Hub - Fitness Tracking",
  // ... other fields ...
  image: "/images/projects/vitality-hub-main.png",  // Thumbnail for card
  images: [
    "/images/projects/vitality-hub-main.png",
    "/images/projects/vitality-hub-analytics.png",
    "/images/projects/vitality-hub-goals.png"
  ],
  imageDescriptions: [
    "Workout Tracking Interface",
    "Analytics Dashboard with Progress Charts",
    "Fitness Goal Management"
  ],
  // ... other fields ...
}
```

### Step 3: Test
1. The first image shows on the project card
2. Click the image to open the gallery lightbox
3. Navigate through images with arrow keys or buttons
4. Descriptions appear at the bottom of each image

## Image Requirements

- **Format:** PNG, JPG, or WebP
- **Recommended size:** 1200-1920px width
- **Aspect ratio:** 16:9 or similar (landscape preferred)
- **File size:** Keep under 500KB for optimal performance
- **Quality:** High-resolution screenshots showing clear UI details

## Gallery Features

✨ **Implemented features:**
- Click any project image to open full-screen gallery
- Navigate with arrow keys (← →) or on-screen buttons
- Press ESC to close
- Image counter (1/4, 2/4, etc.)
- Optional descriptions for each image
- Thumbnail strip for projects with 2-6 images
- Loading states and smooth transitions
- Dark backdrop with blur effect
- Responsive design for all screen sizes

## Tips for Great Project Screenshots

1. **Capture key features** - Show what makes your project unique
2. **Tell a story** - Arrange images to show user flow
3. **Highlight your work** - Focus on features you personally built
4. **Clean UI** - Use test accounts with meaningful data
5. **Consistent sizing** - Keep all screenshots at similar dimensions
6. **Good lighting** - Use light theme for better visibility (or both)
