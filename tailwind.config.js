/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          dark: '#1B3022',
          DEFAULT: '#2C4A35',
          light: '#EAF2EC',
          accent: '#C5A880',
        },
      },
    },
  },
  plugins: [],
}; 