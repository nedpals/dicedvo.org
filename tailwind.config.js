/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
        width: {
          base: '1280px',
          padded: '1240px',
        },
      },
      colors: {
        black: '#333333',
        white: '#FFFFFF',
        red: {
          50: "#FFF5F5",
          100: "#FFEBEB",
          200: "#FFCCCC",
          300: "#FFADAD",
          400: "#FF7070",
          500: "#FF3333",
          600: "#E62E2E",
          700: "#991F1F",
          800: "#731717",
          900: "#4D0F0F",
        },
        yellow: {
          50: "#FFFBF5",
          100: "#FFF7EB",
          200: "#FEECCD",
          300: "#FDE1AF",
          400: "#FCCA73",
          500: "#FBB337",
          600: "#E2A132",
          700: "#976B21",
          800: "#715119",
          900: "#4B3611",
        },
        green: {
          50: "#F4FAF6",
          100: "#EAF6EE",
          200: "#CAE8D3",
          300: "#AADAB9",
          400: "#6ABE85",
          500: "#2AA250",
          600: "#269248",
          700: "#196130",
          800: "#134924",
          900: "#0D3118",
        },
        blue: {
          50: "#F6FCFE",
          100: "#EDF8FD",
          200: "#D1EEFA",
          300: "#B5E4F7",
          400: "#7ED0F2",
          500: "#46BCEC",
          600: "#3FA9D4",
          700: "#2A718E",
          800: "#20556A",
          900: "#153847",
        },
        pink: {
          50: "#FFF5FA",
          100: "#FEEBF5",
          200: "#FDCEE6",
          300: "#FCB1D7",
          400: "#F976BA",
          500: "#F73B9C",
          600: "#DE358C",
          700: "#94235E",
          800: "#6F1B46",
          900: "#4A122F",
        },
        'red-light': {
          50: "#FFF7F7",
          100: "#FFF0F0",
          200: "#FFD9D9",
          300: "#FFC2C2",
          400: "#FF9494",
          500: "#FF6666",
          600: "#E65C5C",
          700: "#993D3D",
          800: "#732E2E",
          900: "#4D1F1F",
        },
        'yellow-light': {
          50: "#FFFCF8",
          100: "#FFF9F0",
          200: "#FEF1DA",
          300: "#FEE8C3",
          400: "#FDD796",
          500: "#FCC669",
          600: "#E3B25F",
          700: "#97773F",
          800: "#71592F",
          900: "#4C3B20",
        },
        'green-light': {
          50: "#F5FCF7",
          100: "#EBFAF0",
          200: "#CCF2D8",
          300: "#AEEAC1",
          400: "#71DB93",
          500: "#34CB64",
          600: "#2FB75A",
          700: "#1F7A3C",
          800: "#175B2D",
          900: "#103D1E",
        },
        'blue-light': {
          50: "#F8FDFE",
          100: "#F1FAFE",
          200: "#DCF3FC",
          300: "#C7EBF9",
          400: "#9EDCF5",
          500: "#74CDF1",
          600: "#68B9D9",
          700: "#467B91",
          800: "#345C6C",
          900: "#233E48",
        },
        'pink-light': {
          50: "#FFF8FB",
          100: "#FEF0F8",
          200: "#FEDAED",
          300: "#FDC4E1",
          400: "#FB98CB",
          500: "#F96CB5",
          600: "#E061A3",
          700: "#95416D",
          800: "#703151",
          900: "#4B2036",
        },
      },
      borderRadius: {
        xl: '45px',
        lg: '22.5px',
        base: '11.25px',
        sm: '5.625px',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
