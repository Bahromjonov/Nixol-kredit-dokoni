/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '1240':'1240px'
      },
      colors:{
        'bodyDgColor':'#F3F6FC'
      },
      fontFamily:{
        'releway':'releway,"sans-serif'
      }
    },
  },
  plugins: [],
}

