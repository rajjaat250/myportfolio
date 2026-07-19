/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6fb',
          100: '#e7edf6',
          200: '#cbd9ea',
          300: '#9ebce0',
          400: '#6997cf',
          500: '#467bc1',
          600: '#3461a3',
          700: '#2b4e85',
          800: '#26426d',
          900: '#23395b',
          950: '#17243c',
        },
        dark: {
          bg: '#050505',
          card: '#0a0a0a',
          border: '#1a1a1a',
          text: '#f2f2f2',
          muted: '#888888',
        },
        light: {
          bg: '#ffffff',
          card: '#fafafa',
          border: '#eaeaea',
          text: '#111111',
          muted: '#666666',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
