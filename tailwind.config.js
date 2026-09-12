/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        viosu: {
          bg: '#06070d',
          darker: '#040508',
          card: 'rgba(13, 16, 32, 0.75)',
          'card-hover': 'rgba(20, 24, 48, 0.85)',
          border: 'rgba(139, 92, 246, 0.16)',
          'border-hover': 'rgba(168, 85, 247, 0.4)',
          violet: '#7c3aed',
          indigo: '#6366f1',
          purple: '#a855f7',
          accent: '#8b5cf6',
          text: '#f8fafc',
          muted: '#94a3b8',
          dim: '#64748b',
        },
        brand: {
          blue: '#2563eb',
          indigo: '#6366f1',
          purple: '#a855f7',
          cyan: '#0891b2',
          emerald: '#10b981',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(124, 58, 237, 0.25)',
        'glow-md': '0 0 30px -5px rgba(124, 58, 237, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(139, 92, 246, 0.45)',
        'glow-pill': '0 4px 20px -2px rgba(124, 58, 237, 0.5)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.3)',
        'card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'reticle-spin': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
      }
    },
  },
  plugins: [],
}