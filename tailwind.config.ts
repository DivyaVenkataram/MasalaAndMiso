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
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        editorial: ['Times New Roman', 'Times', 'serif'],
      },
      fontSize: {
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
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
