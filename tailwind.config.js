/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      keyframes: {
        "move-icon-row-odd": {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        "move-icon-row-even": {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'move-icon-row-odd': 'move-icon-row-odd 80s linear infinite alternate',
        'move-icon-row-even': 'move-icon-row-even 80s linear infinite alternate',
      }
    },
  },
  plugins: [],
}

