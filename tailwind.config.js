/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'], 
  theme: {
    fontFamily: {
     'serif': ['Playfair Display'],
     'sans-serif': ['Lato'],
    },
    colors: {
      'black': '#060607',
      'light-grey': '#B5B9C2',
      'dark-grey': '#4C4E51'
    },
    extend: {},
  },
  plugins: [],
}

