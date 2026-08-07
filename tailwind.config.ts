import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './data/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy-black rather than neutral grey — the blue in the base tone
        // is what makes the electric accent sit naturally on top of it.
        ink: {
          950: '#05070F',
          900: '#080B14',
          850: '#0B0F1A',
          800: '#111725',
          750: '#161D2E',
          700: '#1E273A'
        },
        ice: {
          DEFAULT: '#E8ECF5',
          dim: '#8B93A7',
          // Never below 4.5:1 against the lightest card surface.
          faint: '#7A8299'
        },
        accent: {
          300: '#A9BCFF',
          400: '#7C97FF',
          500: '#3B5BFF',
          600: '#2947E8',
          700: '#1D34B8'
        },
        mint: '#34D399',
        violet: '#A78BFA',
        amber: '#FBBF24'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      },
      fontSize: {
        'display-xl': ['clamp(2.4rem, 5.6vw, 4.25rem)', { lineHeight: '1.06', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2rem, 4.6vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.65rem, 3vw, 2.5rem)', { lineHeight: '1.14', letterSpacing: '-0.025em' }],
        'display-sm': ['clamp(1.3rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }]
      },
      letterSpacing: {
        label: '0.16em'
      },
      maxWidth: {
        shell: '76rem',
        measure: '36rem'
      },
      borderRadius: {
        card: '1.25rem',
        panel: '1.75rem'
      },
      boxShadow: {
        card: '0 24px 70px -40px rgba(0, 0, 0, 0.95)',
        lift: '0 30px 80px -40px rgba(59, 91, 255, 0.55)',
        ring: '0 0 0 1px rgba(59, 91, 255, 0.35)'
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translate3d(0, 18px, 0)' },
          to: { opacity: '1', transform: 'none' }
        },
        floaty: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' }
        },
        breathe: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' }
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        caret: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' }
        },
        typeIn: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        pingSoft: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '70%, 100%': { transform: 'scale(2.4)', opacity: '0' }
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        rise: 'rise 0.85s cubic-bezier(0.16, 1, 0.3, 1) both',
        floaty: 'floaty 6s ease-in-out infinite',
        breathe: 'breathe 7s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
        caret: 'caret 1.1s steps(1, end) infinite',
        'ping-soft': 'pingSoft 2.6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spinSlow 40s linear infinite'
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
}
