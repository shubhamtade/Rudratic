/** @type {import('tailwindcss').Config} */
// No longer need to import daisyui here

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        gradientShift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(5%, -5%) rotate(5deg)" },
          "66%": { transform: "translate(-5%, 5%) rotate(-5deg)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "wave-slow": "wave 8s linear infinite",
        gradientShift: "gradientShift 20s ease infinite",
        fadeIn: "fadeIn 0.6s ease-out",
        slideUp: "slideUp 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  // Remove the daisyui plugin from here
  plugins: [],
};
