import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './services/**/*.{ts,tsx}', './types/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8f3ff',
          200: '#bfe7ff',
          300: '#8ed8ff',
          400: '#56bcff',
          500: '#1d9eff',
          600: '#0d7ae8',
          700: '#0f62c7',
          800: '#144fa0',
          900: '#184884',
        },
        sport: {
          bg: '#060816',
          panel: '#0d1427',
          panelAlt: '#121c34',
          accent: '#64f5d2',
          warning: '#f7c96f',
          danger: '#ff6b7d',
          success: '#3ae3a1',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(29, 158, 255, 0.2), transparent 40%), linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(10, 16, 30, 0.92))',
      },
    },
  },
  plugins: [],
};

export default config;
