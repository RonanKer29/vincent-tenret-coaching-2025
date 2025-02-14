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
        // 🎨 Radix UI Orange Palette
        orange: {
          1: "#FEF8F4",
          2: "#FEEFE7",
          3: "#FFDCC3",
          4: "#FFCBA7",
          5: "#FFB68B",
          6: "#FF9E6C",
          7: "#F9834E",
          8: "#EF691F", // Principale (forte)
          9: "#E64A00", // Couleur primaire
          10: "#D64000",
          11: "#A13600", // Accent fort
          12: "#5B1D00", // Très foncé (texte sur fond clair)
        },

        // Autres couleurs de l'UI
        background: "#FEFCFB", // Fond général
        border: "#D1D5DB", // Bordures standard
        text: "#582D1D", // Texte principal
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
