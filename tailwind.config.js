export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF5EC',
          100: '#FFE7D2',
          200: '#FDCB9F',
          400: '#F5944A',
          500: '#EF7A1A',
          600: '#C8580C',
          700: '#A2460A',
        },
        leaf: {
          50: '#EEF6EF',
          100: '#D6EAD9',
          400: '#5FA66B',
          500: '#3C8A4A',
          600: '#2E6F3B',
          700: '#245A30',
          900: '#14321B',
        },
        cream: '#FFFAF3',
        ink: '#2A1E14',
        muted: '#6B5E54',
        line: '#EFE4D6',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
