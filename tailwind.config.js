/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1440': '1440px'
      },
      colors: {
        'bodyDgColor': '#F3F6FC',
        'brColor': '#2DBF5B'
      },
      fontFamily: {
        'Inter': ['Inter', "sans-serif"]
      },
      fontSize: {
        '10': '10px'
      },
      spacing: {
        '200': '200px',
      },
      screens: {
        '300': '300px',
        '500': '500px',
        '650': '650px',
        '900': '900px',
        '1050': '1050px',
        '1300': '1300px',
      }
    },
  },
  plugins: [],
}

