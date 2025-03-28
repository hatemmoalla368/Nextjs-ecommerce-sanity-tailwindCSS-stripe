const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        accent: '#65c3c8', // DaisyUI's default accent color

        brand: {
          light: '#F0F4F8',
          DEFAULT: '#0F172A',
          dark: '#020617',
        },
        
        
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
      },
      screens: {
        '3xl': '1792px',
      },
    },
  },
  plugins: [require("daisyui")],
  
}