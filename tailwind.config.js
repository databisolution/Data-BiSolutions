/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      smd: "437px",
      // => @media (min-width: 437px) { ... }

      slg: "497px",
      // => @media (min-width: 497px) { ... }

      sx: "588px",
      // => @media (min-width: 588px) { ... }

      xm: "635px",
      // => @media (min-width: 635px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
     
      xlx: "1440px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "2xls": "1630px",
      // => @media (min-width: 1630px) { ... }

      "3xl": "2160px",
      // => @media (min-width: 2160px) { ... }

    },
    extend: {},
  },
  plugins: [],
};
