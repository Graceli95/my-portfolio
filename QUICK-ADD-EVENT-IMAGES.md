# Quick Guide: Add Images to Your Events

## 🚀 Quick Steps (5 minutes)

### 1. Add Your Images to the Folder
Copy your event photos to:
```
/public/images/events/
```

Name them like:
- `year-up-ambassador-1.jpg`
- `year-up-ambassador-2.jpg`
- `commit-your-code-1.jpg`
- `hackathon-2024-1.jpg`

### 2. Edit config/eventsData.ts

**For Year Up Student Ambassador** (already exists):

Uncomment the images section (lines 23-27):
```typescript
images: [
  "/images/events/year-up-ambassador-1.jpg",
  "/images/events/year-up-ambassador-2.jpg",
  "/images/events/year-up-ambassador-3.jpg",
],
```

**For Commit Your Code Conference**:

Uncomment lines 29-43 and fill in your details:
```typescript
{
  id: "commit-your-code-2024",
  title: "Commit Your Code Conference",
  category: "conference",
  date: "November 2024", // Your date
  location: "Phoenix, AZ", // Your location
  description: "Your description here",
  images: [
    "/images/events/commit-your-code-1.jpg",
    "/images/events/commit-your-code-2.jpg",
    "/images/events/commit-your-code-3.jpg",
  ],
},
```

**For Hackathon**:

Uncomment lines 45-60 and fill in your details:
```typescript
{
  id: "hackathon-2024",
  title: "Your Hackathon Name",
  category: "hackathon",
  date: "October 2024", // Your date
  location: "Phoenix, AZ", // Your location
  description: "Your description here",
  images: [
    "/images/events/hackathon-1.jpg",
    "/images/events/hackathon-2.jpg",
    "/images/events/hackathon-3.jpg",
  ],
},
```

### 3. Test It

```bash
npm run dev
```

Visit: `http://localhost:3000/events`

## ✅ That's it!

Your events now have beautiful horizontal scrolling image galleries!

---

📖 **Need more details?** See `EVENTS-IMAGES-GUIDE.md`

