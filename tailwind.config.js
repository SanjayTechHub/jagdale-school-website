/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A2A6C',
          dark: '#0F1A4A',
          light: '#2C3E8C',
          soft: '#E8EEF8',
        },
        accent: {
          DEFAULT: '#C9A227',
          dark: '#A6851F',
          light: '#E0BC4A',
        },
        soft: {
          DEFAULT: '#EEF3FB',
          gray: '#F5F6F8',
        },
        ink: {
          DEFAULT: '#1B2430',
          muted: '#4B5563',
          light: '#6B7280',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#F5F6F8',
          alt: '#EEF3FB',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '800' }],
        h2: ['clamp(1.6rem, 3vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.02em', fontWeight: '700' }],
        h3: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['1.0625rem', { lineHeight: '1.75' }],
        label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.14em', fontWeight: '600' }],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 4px 20px -8px rgba(26, 42, 108, 0.1)',
        'card-hover': '0 14px 32px -12px rgba(26, 42, 108, 0.18)',
        nav: '0 8px 24px -12px rgba(26, 42, 108, 0.18)',
        cta: '0 10px 28px -10px rgba(26, 42, 108, 0.35)',
      },
      borderRadius: {
        card: '1rem',
      },
      transitionDuration: {
        250: '250ms',
        600: '600ms',
        700: '700ms',
      },
    },
  },
  plugins: [],
}
