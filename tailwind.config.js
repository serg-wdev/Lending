/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',       // для Next.js App Router
    './src/pages/**/*.{js,ts,jsx,tsx}',     // если есть pages
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Добавляем xs брейкпоинт
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'], // для заголовков
        body: ['var(--font-roboto)', 'sans-serif'],     // для текста
      },
    },
  },
  plugins: [],
};

