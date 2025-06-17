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
        glow: "glow 3s ease-in-out infinite",
        "bounce-slow": "bounceSlow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        waveMotion: "waveMotion 8s ease-in-out infinite", // 👈 New
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
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 0px rgba(96, 165, 250, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 25px rgba(96, 165, 250, 0.7)",
          },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        waveMotion: {
          // 👈 New keyframe for SVG wave animation
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      backgroundSize: {
        "gradient-animation": "400% 400%",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
  corePlugins: {
    scrollBehavior: true,
  },
};
