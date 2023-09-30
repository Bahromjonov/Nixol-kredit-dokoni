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
        'bodyDgColor':'#F3F6FC',
        'brColor':'#2DBF5B'
      },
      fontFamily:{
        'releway': ['Raleway', "sans-serif"]
      },
      fontSize:{
        '10':'10px'
      },
      // spacing:{
      //   '2':'2px'
      // }
    },
  },
  plugins: [],
}

