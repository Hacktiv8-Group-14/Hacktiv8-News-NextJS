/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        orange : "#F67D12",
        red : "#FF3030",
        'secondary' : {
          orange : "#D37725",
        },
      },
      
      fontSize : {
        small : '8px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
