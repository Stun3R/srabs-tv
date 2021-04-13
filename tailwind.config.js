const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './layouts/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      gray: colors.coolGray,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.lightBlue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      srabs: {
        100: 'var(--srabs-100)',
        200: 'var(--srabs-200)',
        300: 'var(--srabs-300)',
        400: 'var(--srabs-400)',
      },
    },
    fontFamily: {
      display: ['Poppins'],
      body: ['Poppins'],
    },
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    extend: {
      letterSpacing: {
        semiWide: '.015em',
      },
      colors: {
        gray: {
          900: '#282F33',
        },
      },
      spacing: {
        112: '28rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        150: '38rem',
      },
    },
  },
}
