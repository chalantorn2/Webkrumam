/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e91e63",
          light: "#ffb6c1",
          dark: "#c2185b",
        },
        secondary: "#3f51b5",
        text: {
          DEFAULT: "#333",
          light: "#777",
        },
        background: {
          DEFAULT: "#fff",
          alt: "#f5f5f5",
        },
        border: "#eee",
      },
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
      },
      boxShadow: {
        custom: "0 2px 10px rgba(0, 0, 0, 0.1)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
