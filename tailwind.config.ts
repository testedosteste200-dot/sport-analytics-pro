import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './services/**/*.{ts,tsx}', './types/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        sport: {
          bg: '#050b08',
          panel: '#0c1510',
          panelAlt: '#122119',
          accent: '#a3e635',
          warning: '#f7c96f',
          danger: '#ff6b7d',
          success: '#34d399',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 44, 28, 0.24)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.18), transparent 38%), linear-gradient(135deg, rgba(6, 20, 14, 0.98), rgba(8, 15, 12, 0.96))',
      },
    },
  },
  plugins: [],
};

export default config;
