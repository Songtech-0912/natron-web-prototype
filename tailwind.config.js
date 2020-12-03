const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
}

// These are the actual colors
// substitute the original colors with these tomorrow
// colors: {
//       slate: {     
//        light: '#1a1e24', // most of background
//        DEFAULT: '14171c', // footer only
//      },
//      red: {
//        DEFAULT: '#d94755', // accent
//      },
//      grey: {
//        dark: '686e74', // primary dark
//        DEFAULT: 'bcc0c2', // primary text
//        light: '#fbfcfc', // primary bold
// Use both z-index and box shadows for the gallery on the hero page
//      }
//    }
