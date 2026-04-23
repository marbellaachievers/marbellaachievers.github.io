/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#772432",
          50: "#f9ecee",
          100: "#f1cfd4",
          200: "#e09ba5",
          300: "#cf6774",
          400: "#a73f4f",
          500: "#772432",
          600: "#661e2b",
          700: "#501822",
          800: "#3b121a",
          900: "#260b11",
        },
        cyan: {
          DEFAULT: "#004165",
          50: "#e6eff4",
          100: "#b3cedc",
          200: "#80adc4",
          300: "#4d8cab",
          400: "#1a6b93",
          500: "#004165",
          600: "#003855",
          700: "#002e45",
          800: "#002434",
          900: "#001a24",
        },
        happy: {
          DEFAULT: "#F2DF74",
          50: "#fdfaec",
          100: "#faf1c8",
          200: "#f6e79f",
          300: "#f2dd76",
          400: "#efd44e",
          500: "#e7c625",
          600: "#b89d1d",
          700: "#8a7515",
          800: "#5c4e0e",
          900: "#2e2707",
        },
        cool: "#A9B2B1",
      },
      fontFamily: {
        display: ['"Montserrat"', "system-ui", "sans-serif"],
        body: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};
