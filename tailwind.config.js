/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: 'var(--color-main-bg)',
        softBg:'var(--color-soft-bg)',
        darkBg:'var(--color-soft-bg)',
        textMainColor:'var(--color-main-color)',
        textSoftColor:'var(--color-soft-color)',
        textDarkColor:'var(--color-dark-color)',
    },
  },
},
plugins: [],
}