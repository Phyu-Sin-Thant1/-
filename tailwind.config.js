/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dabang-primary': '#1A237E',
        'dabang-secondary': '#FF6F00',
        'dabang-accent': '#00BCD4',
        'dabang-background': '#F5F5F5',
        'dabang-muted': '#616161',
        'dabang-dark-muted': '#424242',
      },
      fontFamily: {
        'sans': ['Pretendard', 'Spoqa Han Sans', 'Noto Sans KR', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Spoqa Han Sans', 'Pretendard', 'system-ui', 'sans-serif'],
        'body': ['Nanum Gothic', 'Noto Sans KR', 'Pretendard', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      }
    },
  },
  plugins: [],
}