/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1b2a4a",
          muted: "#5b6b8d"
        },
        sky: {
          DEFAULT: "#4f8cff",
          deep: "#2d6bff"
        },
        berry: "#ff7db9",
        sun: "#ffd166",
        mint: "#35d6b1",
        lavender: "#b99cff",
        cloud: "#f6f9ff",
        line: "#e3ecf7"
      },
      boxShadow: {
        card: "0 14px 35px rgba(27, 42, 74, 0.12)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(79, 140, 255, 0.2), transparent 55%)"
      }
    }
  },
  plugins: []
};
