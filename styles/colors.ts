/**
 * Centralized Color Theme Configuration
 * 
 * Professional Slate with Teal Accents Theme for Grace Li Portfolio
 * 
 * Color Usage Philosophy (Updated):
 * - Primary (Slate): 70-80% - Professional foundation, text, headings, backgrounds
 * - Secondary (Teal): 10-20% - Main CTAs, buttons, active states, strategic highlights
 * - Accent (Purple): 5-10% - MINIMAL use - Homepage hero CTA, scrollbar, focus rings only
 * 
 * To change the entire site's color scheme:
 * 1. Modify the colors below
 * 2. Update tailwind.config.ts if adding new color names
 * 3. Colors will automatically update throughout the site
 */

export const colors = {
  // Primary Color - Slate (Professional Base)
  primary: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b", // Main slate - used for headings, text, professional elements
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    DEFAULT: "#64748b",
  },

  // Secondary Color - Teal (Calm Accent)
  secondary: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6", // Main teal - used for secondary buttons, subtle accents
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    DEFAULT: "#14b8a6",
  },

  // Accent Color - Purple (Strategic Highlights)
  accent: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7", // Main purple - RESERVED for CTAs, important buttons, active states
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    DEFAULT: "#a855f7",
  },

  // Neutral Colors
  neutral: {
    white: "#ffffff",
    lightGray: "#f9fafb",
    mediumGray: "#6b7280",
    darkGray: "#1f2937",
    black: "#111827",
  },

  // Gradient Combinations (for backgrounds, hero sections)
  gradients: {
    accentToSecondary: "linear-gradient(135deg, #a855f7 0%, #14b8a6 100%)", // Purple to Teal
    secondaryToAccent: "linear-gradient(135deg, #14b8a6 0%, #a855f7 100%)", // Teal to Purple
    slateLight: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", // Subtle slate
    tealLight: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
    accentLight: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)", // Light purple
  },
};

// Dark Mode Colors
export const darkModeColors = {
  background: "#111827",
  surface: "#1f2937",
  text: {
    primary: "#f9fafb",
    secondary: "#d1d5db",
  },
  primary: {
    DEFAULT: "#94a3b8", // Lighter slate for dark mode
  },
  secondary: {
    DEFAULT: "#2dd4bf", // Brighter teal for dark mode
  },
  accent: {
    DEFAULT: "#c084fc", // Lighter purple for dark mode
  },
};

// Usage Examples (Updated for new distribution):
// bg-primary-500 -> Slate background (professional)
// text-primary-700 -> Dark slate text
// bg-secondary-600 -> Teal background (MAIN CTAs!)
// text-secondary-600 -> Teal text
// hover:bg-secondary-700 -> Darker teal on hover
// bg-accent-600 -> Purple (RESERVED: Homepage hero CTA ONLY)
// border-secondary-400 -> Teal border

