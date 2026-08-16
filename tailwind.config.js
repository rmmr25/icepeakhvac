/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        navy:  { 950:'#060F1F', 900:'#0A1830', 800:'#0F2344', 700:'#16325E', 600:'#1E4278' },
        ice:   { 200:'#BAE6FD', 300:'#7DD3FC', 400:'#38BDF8', 500:'#0EA5E9' },
        ember: { 400:'#FB923C', 500:'#F97316', 600:'#EA580C' },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
