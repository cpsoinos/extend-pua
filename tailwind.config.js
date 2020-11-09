const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.jsx',
      './src/**/*.tsx'
    ]
  },
  theme: {
    colors: {
      ...colors,
      brand: {
        red: '#d10000',
        blue: '#00b3ff',
        purple: '#50055E'
      },
      blue: {
        ...colors.blue,
        'tier-6': '#0012FF',
        'tier-5': '#005BFF',
        'tier-4': '#0098FF',
        'tier-3': '#08BAFF',
        'tier-2': '#4AD5FF',
        'tier-1': '#A3EAFF',
        'tier-0': '#DEF1F7'
      },
      background: {
        black: '#101317',
        blue: '#00b3ff'
      }
    },
    extend: {
      fontFamily: {
        luloBold: [
          '"Lulo Clean One Bold"',
          'sans-serif'
        ],
        futuraPTMedium: [
          '"Futura PT Medium"',
          'sans-serif'
        ],
        futuraPTMediumOblique: [
          '"Futura PT MediumO blique"',
          'sans-serif'
        ],
        futuraPTLight: [
          '"Futura PT Light"',
          'sans-serif'
        ],
        futuraPTLightOblique: [
          '"Futura PT Light Oblique"',
          'sans-serif'
        ],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        xxs: '0.5rem',
      },
      width: {
        '80': '20rem'
      },
      height: {
        '80': '20rem'
      },
      minWidth: {
        '40': '10rem',
        '1/4': '25%',
        '1/3': `${(1/3) * 100}%`,
      },
      maxWidth: {
        '1/3': `${(1/3) * 100}%`,
        '1/2': '50%',
      },
      opacity: {
        '10': '0.1',
      }
    }
  },
  corePlugins: {},
  plugins: [],
}
