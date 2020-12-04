module.exports = {
  purge: {
    enabled: true,
    content: ['*.html'],
  },
  theme: {
    colors: {
      slate: {
        light: '#1a1e24', // most of background
        DEFAULT: '#14171c', // footer only
      },
      red: {
        DEFAULT: '#d94755', // accent
      },
      grey: {
        dark: '#686e74', // primary dark
        DEFAULT: '#bcc0c2', // primary text
        light: '#fbfcfc', // primary bold
      },
      gradient: {
        blue: '#4195f3', // gradient blue
        purple: '#7e3bf1', // gradient purple
      }
    }
  }
  // variants: {}
  // plugins: []
}



