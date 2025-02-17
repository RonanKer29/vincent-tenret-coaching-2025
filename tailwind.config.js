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
        blue: {
          1: "#FBFDFF",
          2: "#F5FAFF",
          3: "#EAF4FE",
          4: "#DAE9FD",
          5: "#C4DCFC",
          6: "#A8C9F8",
          7: "#86B6F0",
          8: "#528DE1",
          9: "#0072F5",
          10: "#0064DB",
          11: "#0044A3",
          12: "#00285B",
        },
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
        background: "#FBFDFF",
        border: "#A8C9F8",
        text: "#00285B",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // Titres et boutons
        body: ["Open Sans", "sans-serif"], // Textes généraux
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
