/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          "2xl": "2rem",
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "0rem",
        },
      },
      boxShadow: {
        header: "0px 25px 50px -12px rgba(0, 0, 0, 0.04)",
      },
      fontSize: {
        h1: ["105px", "126px"],
        h2: ["60px", "72px"],
        h3: ["24px", "28px"],
        h4: ["20px", "24px"],
        smh1: ["66px", "79.2px"],
        smh2: ["24px", "28.8px"],
        smh3: ["20px", "28px"],
        smh4: ["14px", "16.8px"],
      },
      fontFamily: {
        barlow: "var(--font-barlow)",
        mono: ["var(--font-barlow)", "lato"],
      },
      colors: {
        primary: "#F77E00",
        "primary-dark": "#D46D00",
        secondary: "#2E7304",
        "secondary-dark": "#265F03",
        "techday-grey": "#353535",
        "techday-dark": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
