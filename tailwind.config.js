/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // 🎨 Radix UI Blue Palette
        blue: {
          1: "#FBFDFF", // App background
          2: "#F5FAFF", // Subtle background
          3: "#EAF4FE", // UI element background
          4: "#DAE9FD", // Hovered UI element background
          5: "#C4DCFC", // Active/Selected UI element background
          6: "#A8C9F8", // Subtle borders and separators
          7: "#86B6F0", // UI element border and focus rings
          8: "#528DE1", // Hovered UI element border
          9: "#0072F5", // Solid backgrounds (Primary)
          10: "#0064DB", // Hovered solid backgrounds
          11: "#0044A3", // Low-contrast text
          12: "#00285B", // High-contrast text
        },

        // Autres couleurs pour cohérence avec Orange
        orange: {
          1: "#FEF8F4",
          2: "#FEEFE7",
          3: "#FFDCC3",
          4: "#FFCBA7",
          5: "#FFB68B",
          6: "#FF9E6C",
          7: "#F9834E",
          8: "#EF691F",
          9: "#E64A00",
          10: "#D64000",
          11: "#A13600",
          12: "#5B1D00",
        },

        // Neutres
        background: "#FBFDFF", // Fond général (Blue-1)
        border: "#A8C9F8", // Bordures (Blue-6)
        text: "#00285B", // Texte principal (Blue-12)
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
