/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // deep blue
        secondary: "#60a5fa", // sky blue
        accent: "#3b82f6", // standard blue
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-in-down": "fadeInDown 0.8s ease-in-out",
        gradient: "gradientBG 10s ease infinite",
        pulseSlow: "pulse 4s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        gradientBG: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "gradient-animation": "400% 400%",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"), // optional: better form styling
    require("tailwind-scrollbar"), // optional: for custom scrollbars
  ],
  corePlugins: {
    scrollBehavior: true, // enables smooth scrolling utility (if needed)
  },
  darkMode: "class", // optional: enable dark mode support via class strategy
};
