/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
      backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#1597E4',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
       'cutom':'#D8D8D8'
      })
      
  },
  plugins: [],
}
