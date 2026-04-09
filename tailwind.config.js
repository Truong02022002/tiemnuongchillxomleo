/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './blog/**/*.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        foreground: '#F5F2EB',
        primary: '#C5A059',
        secondary: '#141414',
        accent: '#E25822',
        muted: '#8E8B86',
        surface: '#111111',
      },
      fontFamily: {
        sans: ['var(--font-signika)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-signika)', 'ui-sans-serif', 'system-ui'],
        script: ['Dancing Script', 'cursive'],
      }
    }
  },
  plugins: [],
}
