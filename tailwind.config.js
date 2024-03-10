/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container : {
      center : true,
      padding : '2rem'
    },
    extend: {
      fontFamily : {
        'yeakan' : ['yeakan']
      },
      colors : {
        'blue' : '#426be6',
        'gray' : '#6c757d'
      },
    },
  },
  plugins: [],
}

