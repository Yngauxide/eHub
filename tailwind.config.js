/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      
      colors: {
        custom: '#0B373C',
        textcolor:'#E3FFCC',
        underfoot:'#08272B',
        mint:'#1AA47B',
        primary:'#FFFFFF',
        linear2:' #1AA47B',

    },



    fontFamily:{
Inter: ["Inter"]
    },
  },
  plugins: [],
}
}
