/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('./frontendmentor/bg-desktop-light.jpg')",
        'desktop-dark': "url('./frontendmentor/bg-desktop-dark.jpg')",
        'mobile-light': "url('./frontendmentor/bg-mobile-light.jpg')",
        'mobile-dark': "url('./frontendmentor/bg-mobile-dark.jpg')",
        'icon-check': "url('./frontendmentor/icon-check.svg')",
        'icon-cross': "url('./frontendmentor/icon-cross.svg')",
        'icon-moon': "url('./frontendmentor/icon-moon.svg')",
        'icon-sun': "url('./frontendmentor/icon-sun.svg')",
      },
      colors: {
        'primary': {
          'blue': 'hsl(220, 98%, 61%)',
          'cyan': 'hsl(192, 100%, 67%)',
          'purple': 'hsl(280, 87%, 65%)'
        },
        'light': {
          'gray': 'hsl(0, 0%, 98%)',
          'blue': {
            100: 'hsl(236, 33%, 92%)',
            200: 'hsl(233, 11%, 84%)',
            300: 'hsl(236, 9%, 61%)',
            400: 'hsl(235, 19%, 35%)'
          }
        },
        'dark-blue': {
          100: 'hsl(234, 39%, 85%)',
          200: 'hsl(236, 33%, 92%)',
          300: 'hsl(234, 11%, 52%)',
          400: 'hsl(233, 14%, 35%)',
          500: 'hsl(237, 14%, 26%)',
          600: 'hsl(235, 24%, 19%)',
          700: 'hsl(235, 21%, 11%)',
        }
      }
    },
  },
  plugins: [],
}

