/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html','./build/js/*.js'],
  theme: {
    extend: {
      screens:{
        'widescreen':{'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen':{'raw': '(min-aspect-ratio: 13/20)'},

      },
      keyframes: {
        'open-menu': {
          '0%': {translate: 'scaleY(0)'},
          '80%': {translate: 'scaleY(80)'},
          '100%': {translate: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forward'
      }
    },
  },
  plugins: [],
}

