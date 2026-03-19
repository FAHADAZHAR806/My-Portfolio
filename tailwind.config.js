/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark:   { bg: '#3a3a3a', surface: '#333333', card: '#424242', border: '#525252', text: '#f0ede8', muted: '#c0b8b0', subtle: '#8a8278' },
        light:  { bg: '#f5f0e8', surface: '#ede8de', card: '#ffffff', border: '#d8d0c4', text: '#1e1c18', muted: '#4a4540', subtle: '#8a8278' },
        accent: { DEFAULT: '#c9a96e', hover: '#e0bf85' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Lora', 'Georgia', 'serif'],
        ui:      ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        fadeUp:   { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blink:    { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        floatY:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        spinRing: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'blink':     'blink 1s infinite',
        'float':     'floatY 5s ease-in-out infinite',
        'spin-ring': 'spinRing 10s linear infinite',
      },
    },
  },
  plugins: [],
}
