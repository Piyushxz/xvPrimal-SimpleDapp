import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8697C4",
        secondary: "#ADBBDA",
        tertiary: "#EDEF8F5",
      },
      fontFamily: {
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			],
  			manrope: [
  				'Manrope',
  				'sans-serif'
  			]
  		},
    },
  },
  plugins: [],
} satisfies Config;
