import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        sm: '599px',
      },
      screens: {
        sm: { min: '0px' },
        md: { min: '600px' },
        lg: { min: '1240px' },
      },
      backgroundColor: {
        primary: '#FAFAFA',
        black: '#1E1E1E',
      },
      colors: {
        primary: '#1E1E1E',
        support: '#8C8C8C',
        black: '#1E1E1E',
        white: '#FAFAFA'
      },
    },
  },
  plugins: [],
} satisfies Config;
