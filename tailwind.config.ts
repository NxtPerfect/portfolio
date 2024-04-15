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
      },
      animation: {
        'move-bottom': 'move-bottom 1s ease .5s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
