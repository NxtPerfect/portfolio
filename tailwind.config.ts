import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'move-bottom': {
          from: {
            zindex: '-1',
            transform: 'translateY(50svh)',
            opacity: '0',
          },
          to: {
            zindex: '0',
            transform: 'translateY(0)',
            opacity: '1.0',
          },
        },
        'move-left': {
          from: {
            left: '120svw',
            transform: 'rotate(360deg)',
          },
          '50%': {
            left: '-20svw',
            transform: 'rotate(0deg)',
          },
          to: {
            left: '120svw',
            transform: 'rotate(360deg)',
          }
        },
        'move-right': {
          from: {
            right: '120svw',
            transform: 'rotate(120deg)',
          },
          '50%': {
            right: '-20svw',
            transform: 'rotate(0deg)',
          },
          to: {
            right: '120svw',
            transform: 'rotate(360deg)',
          }
        }
      },
      animation: {
        'move-bottom': 'move-bottom 1s ease .5s forwards',
        'move-left': 'move-left 30s linear .5s infinite',
        'move-right': 'move-right 30s linear .5s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
