# Image Lightbox Implementation Guide

A step-by-step guide to implement a full-featured image lightbox in your Next.js project.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Create the Lightbox Component](#step-1-create-the-lightbox-component)
4. [Step 2: Add State Management](#step-2-add-state-management)
5. [Step 3: Create Handler Functions](#step-3-create-handler-functions)
6. [Step 4: Make Images Clickable](#step-4-make-images-clickable)
7. [Step 5: Render the Lightbox](#step-5-render-the-lightbox)
8. [Testing](#testing)
9. [Customization Options](#customization-options)

---

## Overview

This guide will help you implement a professional image lightbox with:
- ✅ Full-screen image viewing
- ✅ Keyboard navigation (arrow keys, ESC)
- ✅ Mouse/touch navigation
- ✅ Image counter
- ✅ Smooth animations
- ✅ Mobile-responsive design

**Time to implement**: ~30 minutes

---

## Prerequisites

Before starting, ensure you have:
- ✅ Next.js 13+ with App Router
- ✅ TypeScript configured
- ✅ Tailwind CSS installed
- ✅ `lucide-react` for icons (`npm install lucide-react`)

---

## Step 1: Create the Lightbox Component

### 1.1 Create Component File

Create a new file: `components/events/ImageLightbox.tsx` (or adjust path as needed)

### 1.2 Component Code

```typescript
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];           // Array of image paths
  currentIndex: number;       // Currently displayed image index
  onClose: () => void;        // Close handler function
  onNext: () => void;         // Next image handler
  onPrevious: () => void;     // Previous image handler
  eventTitle: string;         // Title for accessibility (alt text)
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  eventTitle,
}: ImageLightboxProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image Container */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex]}
              alt={`${eventTitle} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
```

### 1.3 Key Features Explained

- **Keyboard Navigation**: `useEffect` listens for arrow keys and ESC
- **Body Scroll Lock**: Prevents page scrolling when lightbox is open
- **Click Outside to Close**: Backdrop click closes lightbox
- **Stop Propagation**: Image click doesn't close lightbox
- **Conditional Navigation**: Only shows arrows if multiple images

---

## Step 2: Add State Management

In your page/component where you want the lightbox (e.g., `app/events/page.tsx`):

### 2.1 Import the Component

```typescript
import ImageLightbox from "@/components/events/ImageLightbox";
```

### 2.2 Add State Variables

```typescript
export default function YourPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxEventTitle, setLightboxEventTitle] = useState("");

  // ... rest of your component
}
```

**State Explanation:**
- `lightboxOpen`: Controls if lightbox is visible
- `lightboxImages`: Array of all images for current lightbox
- `lightboxIndex`: Which image is currently displayed (0-based)
- `lightboxEventTitle`: Title for accessibility

---

## Step 3: Create Handler Functions

Add these functions to your component:

```typescript
// Open lightbox with specific image
const openLightbox = (images: string[], index: number, eventTitle: string) => {
  setLightboxImages(images);
  setLightboxIndex(index);
  setLightboxEventTitle(eventTitle);
  setLightboxOpen(true);
};

// Close lightbox
const closeLightbox = () => {
  setLightboxOpen(false);
};

// Navigate to next image (wraps around)
const nextImage = () => {
  setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
};

// Navigate to previous image (wraps around)
const previousImage = () => {
  setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
};
```

**Navigation Logic:**
- **Next**: `(index + 1) % total` wraps from last to first
- **Previous**: `(index - 1 + total) % total` wraps from first to last

---

## Step 4: Make Images Clickable

### 4.1 Basic Implementation

Replace your image `<div>` with a clickable `<button>`:

```typescript
{images.map((image, index) => (
  <button
    key={index}
    onClick={() => openLightbox(images, index, "Event Title")}
    className="relative w-64 h-48 rounded-lg overflow-hidden cursor-pointer"
  >
    <Image
      src={image}
      alt={`Event - Image ${index + 1}`}
      fill
      className="object-cover"
    />
  </button>
))}
```

### 4.2 Enhanced with Hover Effect

Add a "Click to view" hint on hover:

```typescript
{images.map((image, index) => (
  <button
    key={index}
    onClick={() => openLightbox(images, index, "Event Title")}
    className="flex-shrink-0 w-64 h-48 relative rounded-lg overflow-hidden border-2 border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-lg group cursor-pointer"
    aria-label={`View Image ${index + 1}`}
  >
    <Image
      src={image}
      alt={`Event - Image ${index + 1}`}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
    {/* Hover hint overlay */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-gray-900">
        Click to view
      </div>
    </div>
  </button>
))}
```

---

## Step 5: Render the Lightbox

At the end of your component's return statement (before closing `</div>`):

```typescript
return (
  <div className="min-h-screen">
    {/* Your existing content */}
    
    {/* ... */}

    {/* Image Lightbox - Render conditionally */}
    {lightboxOpen && (
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
        eventTitle={lightboxEventTitle}
      />
    )}
  </div>
);
```

---

## Testing

### ✅ Test Checklist

1. **Open Lightbox**
   - [ ] Click on image opens lightbox
   - [ ] Correct image is displayed
   - [ ] Background darkens

2. **Navigation**
   - [ ] Left arrow button works
   - [ ] Right arrow button works
   - [ ] Left arrow key works
   - [ ] Right arrow key works
   - [ ] Navigation wraps (last → first, first → last)

3. **Close Lightbox**
   - [ ] X button closes lightbox
   - [ ] ESC key closes lightbox
   - [ ] Click backdrop closes lightbox
   - [ ] Click on image doesn't close lightbox

4. **UI Elements**
   - [ ] Image counter displays (e.g., "2 / 4")
   - [ ] Buttons have hover effects
   - [ ] "Click to view" hint appears

5. **Mobile**
   - [ ] Works on mobile devices
   - [ ] Touch-friendly buttons
   - [ ] Responsive sizing

6. **Accessibility**
   - [ ] Keyboard navigation works
   - [ ] ARIA labels present
   - [ ] Alt text on images

---

## Customization Options

### Change Background Opacity

```typescript
// In ImageLightbox.tsx, adjust the backdrop:
className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
//                                                                      ^^^ Change 95 to 80, 70, etc.
```

### Change Button Styles

```typescript
// Modify button className:
className="absolute top-4 right-4 z-50 p-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white"
//                                                       ^^^^^^^^^^^^^^^^ Use your brand colors
```

### Add Zoom Functionality

Add a zoom state and controls:

```typescript
const [zoom, setZoom] = useState(1);

// In image container:
<Image
  src={images[currentIndex]}
  alt={`${eventTitle} - Image ${currentIndex + 1}`}
  fill
  className="object-contain"
  style={{ transform: `scale(${zoom})` }}
/>

// Add zoom buttons
<button onClick={() => setZoom(z => Math.min(z + 0.5, 3))}>+</button>
<button onClick={() => setZoom(z => Math.max(z - 0.5, 1))}>-</button>
```

### Disable Keyboard Navigation

Remove or comment out the keyboard `useEffect` in `ImageLightbox.tsx`:

```typescript
// useEffect(() => {
//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (e.key === "Escape") onClose();
//     if (e.key === "ArrowLeft") onPrevious();
//     if (e.key === "ArrowRight") onNext();
//   };
//   window.addEventListener("keydown", handleKeyDown);
//   return () => window.removeEventListener("keydown", handleKeyDown);
// }, [onClose, onNext, onPrevious]);
```

### Change Image Counter Position

```typescript
// Move from bottom to top:
<div className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
//                     ^^^^ Changed from bottom-4
  {currentIndex + 1} / {images.length}
</div>
```

### Hide Image Counter

Simply remove or comment out the image counter section in `ImageLightbox.tsx`.

---

## Common Issues & Solutions

### Issue: Images don't load in lightbox

**Solution**: Check image paths are correct and accessible. Ensure images are in `/public` folder.

```typescript
// Correct path format:
images: ["/images/events/photo1.jpg"]

// Not:
images: ["./images/events/photo1.jpg"]
```

### Issue: ESC key doesn't work

**Solution**: Ensure the keyboard event listener is added correctly and the component is mounted.

### Issue: Body still scrolls when lightbox is open

**Solution**: Verify the body scroll lock `useEffect` is present:

```typescript
useEffect(() => {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = "unset";
  };
}, []);
```

### Issue: Lightbox appears behind content

**Solution**: Increase z-index in lightbox component:

```typescript
className="fixed inset-0 z-[9999] ..."
//                      ^^^^^^^^ Higher z-index
```

### Issue: Navigation wraps incorrectly

**Solution**: Check modulo math in navigation functions:

```typescript
// Next (correct):
const nextImage = () => {
  setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
};

// Previous (correct):
const previousImage = () => {
  setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
};
```

---

## Advanced Features (Optional)

### 1. Swipe Gestures for Mobile

Install and use `react-swipeable`:

```bash
npm install react-swipeable
```

```typescript
import { useSwipeable } from 'react-swipeable';

const handlers = useSwipeable({
  onSwipedLeft: () => nextImage(),
  onSwipedRight: () => previousImage(),
});

// Apply to image container:
<div {...handlers} className="...">
```

### 2. Image Captions

Add captions array to props and display below image:

```typescript
interface ImageLightboxProps {
  images: string[];
  captions?: string[];  // Add this
  // ... other props
}

// Display caption:
{captions && captions[currentIndex] && (
  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 text-white text-sm">
    {captions[currentIndex]}
  </div>
)}
```

### 3. Download Button

Add a download button:

```typescript
<a
  href={images[currentIndex]}
  download
  className="absolute top-4 left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
  onClick={(e) => e.stopPropagation()}
>
  <Download className="w-6 h-6" />
</a>
```

### 4. Thumbnail Navigation

Show thumbnails at bottom:

```typescript
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
  {images.map((img, idx) => (
    <button
      key={idx}
      onClick={(e) => {
        e.stopPropagation();
        setLightboxIndex(idx);
      }}
      className={`w-16 h-16 relative rounded overflow-hidden border-2 ${
        idx === currentIndex ? 'border-white' : 'border-gray-500'
      }`}
    >
      <Image src={img} alt="" fill className="object-cover" />
    </button>
  ))}
</div>
```

---

## Best Practices

1. **Always provide alt text** for accessibility
2. **Use semantic HTML** (`<button>` for clickable elements)
3. **Clean up event listeners** in useEffect return
4. **Prevent body scroll** when lightbox is open
5. **Stop click propagation** on image to prevent closing
6. **Test on mobile devices** for touch interactions
7. **Optimize images** before uploading (compress, resize)
8. **Use loading states** for slow network connections

---

## Summary

You now have a fully functional image lightbox with:
- ✅ Full-screen viewing
- ✅ Keyboard navigation
- ✅ Mouse/touch controls
- ✅ Smooth animations
- ✅ Mobile-responsive
- ✅ Accessible

**Files to create:**
1. `components/events/ImageLightbox.tsx` - The lightbox component
2. Update your page component with state and handlers

**Total time**: ~30 minutes  
**Lines of code**: ~200

Enjoy your professional image lightbox! 🎉

