/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        'ink-2': 'rgb(var(--c-ink-2) / <alpha-value>)',
        'ink-3': 'rgb(var(--c-ink-3) / <alpha-value>)',
        mist: 'rgb(var(--c-mist) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        lilac: 'rgb(var(--c-lilac) / <alpha-value>)',
        'lilac-deep': 'rgb(var(--c-lilac-deep) / <alpha-value>)',
        blush: 'rgb(var(--c-blush) / <alpha-value>)',
        'on-accent': 'rgb(var(--c-on-accent) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: { glow: '0 0 60px -12px rgb(var(--c-lilac) / .45)' },
    },
  },
  plugins: [],
}
