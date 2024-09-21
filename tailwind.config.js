/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // تأكد من تعديل المسار حسب هيكل مشروعك
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), // أضف هنا
  ],
};
