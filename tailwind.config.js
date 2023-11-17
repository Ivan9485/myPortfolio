/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'primary':'#1D3557',
        'secondary':'#457b9d',
        'terciary':'#a8dadc',
        'textdef':'#f1faee',
        'special':'#e63946'
      },
    },
  },
  plugins: [],
}