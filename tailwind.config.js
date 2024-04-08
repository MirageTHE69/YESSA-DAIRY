/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius:{
      'large' : '110px' 
    },
    extend: {
      fontFamily:{

          'Jost' : ['Jost', 'sans-serif'],
          'Ls' : [ 'League Spartan', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}

