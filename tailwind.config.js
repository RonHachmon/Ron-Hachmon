/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Accent color - used for links, hover states, badges
        accent: {
          DEFAULT: '#5eead4', // teal-300
          light: '#99f6e4',   // teal-200
          dark: '#2dd4bf',    // teal-400
          muted: 'rgba(94, 234, 212, 0.1)', // for badge backgrounds
        },
      }
    },
  },
  variants: {

    extend: {
      textColor: ['enabled, disabled'],
     },
  },
  plugins: [],
}
