/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // UI/UX Pro Max curated Developer Palette
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          accent: '#3B82F6',
          emerald: '#10B981',
          purple: '#6366F1',
          cyan: '#06B6D4',
          amber: '#F59E0B',
        },
        dark: {
          bg: '#090D16',
          surface: '#0F172A',
          card: '#131B2E',
          'card-hover': '#18233C',
          border: '#1E293B',
          'border-highlight': '#334155',
          muted: '#94A3B8',
          text: '#F8FAFC',
        },
        // Backward compatibility for existing references
        arctic: {
          ice: '#F1F5F9',
          accent: '#2563EB',
          white: '#FFFFFF',
          night: '#0F172A',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'elevated': '0 12px 32px -4px rgba(0, 0, 0, 0.1)',
        'accent-glow': '0 0 25px -4px rgba(59, 130, 246, 0.35)',
        'emerald-glow': '0 0 25px -4px rgba(16, 185, 129, 0.35)',
        'bento': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'bento-dark': '0 10px 35px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
