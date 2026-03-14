import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,tsx,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#16202b',
        ocean: '#114665',
        burgundy: '#720f32',
        wine: '#7b445a',
        neutral: '#d1d1d6',
        page: '#f3f3f5',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        editorial: ['Times New Roman', 'Times', 'serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1' }],
        'page': ['48px', { lineHeight: '1.2' }],
        'section': ['32px', { lineHeight: '1.25' }],
        'metadata': ['15px', { lineHeight: '1.6' }],
        'filter': ['16px', { lineHeight: '1.6' }],
      },
      letterSpacing: {
        brand: '0.15em',
      },
      spacing: {
        'section': '80px',
        'component': '32px',
      },
      maxWidth: {
        reading: '720px',
        layout: '1200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(17,70,101,0.8)' },
          '50%': { opacity: '0.85', boxShadow: '0 0 28px rgba(17,70,101,0.95)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
