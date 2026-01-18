/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: '#4C2A85',
          light: '#a78bfa',
          bg: '#f3f0ff',
        },
        bg: {
          primary: '#fafafa',
          white: '#ffffff',
        },
        text: {
          primary: '#18181b',
          body: '#3f3f46',
          muted: '#71717a',
        },
        border: {
          DEFAULT: '#e4e4e7',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
