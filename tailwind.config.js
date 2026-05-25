/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trygg: {
          navy: {
            950: '#060B13', // Deepest corporate navy
            900: '#0B192C', // Primary Brand Dark
            800: '#152C4B', // Cards / Secondary Navy
            700: '#1E3E62', // Soft Brand Navy
            600: '#2A5584',
            500: '#3D74B0',
            100: '#E0F2FE',
            50: '#F0F9FF',
          },
          teal: {
            DEFAULT: '#0D9488', // Savings / Success
            dark: '#0F766E',    // Hover states
            light: '#14B8A6',
            accent: '#2DD4BF',
            bg: '#F0FDFA',
          },
          accent: {
            amber: '#D97706',
            red: '#DC2626',
            rose: '#FDA4AF',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 2.5s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

