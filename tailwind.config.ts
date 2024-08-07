import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors : {
      'orange' : 'rgba(216,125,74,255)',
      'light-orange':'#e8c1a7',
      'black' : 'rgba(25,25,25,255)',
      'gray' : 'rgb(113,111,110)',
      'light-gray':'rgba(241,241,241,255)',
      'white' : 'white',
      'shadow' : 'rgba(0, 0, 0, 0.45)'
    },
    screens : {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '950px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '850px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '480px'},

    },
  },
  plugins: [],
};
export default config;
