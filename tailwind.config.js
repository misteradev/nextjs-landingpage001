/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    container: {
      padding: {
        DEFAULT: "0.5rem",
        sm: '2rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
