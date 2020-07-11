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
      red: {
        ...colors.red,
        'flag': '#d10000'
      },
      blue: {
        ...colors.blue,
        'deep-sky': '#00b3ff',
      },
    },
    fontFamily: {
      lulo: [
        '"Lulo Clean W01 One"',
        'sans-serif'
      ],
      luloBold: [
        '"Lulo Clean W01 One Bold"',
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
    minWidth: {
      '40': '10rem',
      '1/4': '25%',
      '1/3': `${(1/3) * 100}%`,
    },
  },
  corePlugins: {},
  plugins: [],
}
