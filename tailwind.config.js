/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'about.html', 'contact.html', 'privacy-policy.html', 'pricing.html', './src/**/*.{js,jsx,ts,tsx,vue,html}', './node_modules/flowbite/**/*.js'],
  theme: {
    colors: {
      'header-dark-blue': '#080f63',
      'ternary-dark': 'rgb(30 56 81/var(--tw-bg-opacity))',
      'dark-blue': 'rgb(16 45 68/var(--tw-bg-opacity))',
      'logo': '#4152a3'
    },
    extend: {
      dropShadow: {
        '3xl': '0 5px 10px rgba(255, 255, 255, 0.20)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },

  plugins: [require('flowbite/plugin')],
  darkMode: 'class'
}



