/**
 * Centralized Color Theme Configuration
 * 
 * Purple & Teal Theme for Grace Li Portfolio
 * 
 * To change the entire site's color scheme:
 * 1. Modify the colors below
 * 2. Update tailwind.config.ts if adding new color names
 * 3. Colors will automatically update throughout the site
 */

export const colors = {
  // Primary Color - Purple
  primary: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7", // Main purple - used for primary buttons, links
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    DEFAULT: "#a855f7",
  },

  // Secondary Color - Teal
  secondary: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6", // Main teal - used for secondary buttons, accents
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    DEFAULT: "#14b8a6",
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
    purpleToTeal: "linear-gradient(135deg, #a855f7 0%, #14b8a6 100%)",
    tealToPurple: "linear-gradient(135deg, #14b8a6 0%, #a855f7 100%)",
    purpleLight: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)",
    tealLight: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
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
    DEFAULT: "#c084fc", // Lighter purple for dark mode
  },
  secondary: {
    DEFAULT: "#2dd4bf", // Brighter teal for dark mode
  },
};

// Usage Examples:
// bg-primary-500 -> Purple background
// text-secondary-600 -> Teal text
// hover:bg-primary-600 -> Darker purple on hover
// border-secondary-400 -> Teal border

