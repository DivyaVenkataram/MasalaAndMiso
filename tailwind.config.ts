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
      letterSpacing: {
        brand: '0.15em',
      },
      fontSize: {
        'section': ['2.625rem', { lineHeight: '1.2' }],
        'section-lg': ['3.5rem', { lineHeight: '1.15' }],
      },
      maxWidth: {
        reading: '720px',
        layout: '1200px',
      },
      backgroundImage: {
        'hero': 'linear-gradient(rgba(22, 32, 43, 0.4), rgba(22, 32, 43, 0.6))',
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
