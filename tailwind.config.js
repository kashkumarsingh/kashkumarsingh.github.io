/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      boxShadow: ["active"],
    },
  },
  theme: {
    fontFamily: {
      sans: ["Grifter", "Open Sans", "Helvetica", "Arial", "sans-serif"],
      sansBody: ["Plus Jakarta Sans", "sans-serif"],
      serif: ["Lora", "Georgia", "Times", "serif"],
      mono: ["Fira Code", "Courier", "monospace"],
    },
    extend: {
      boxShadow: {
        custom: "6px 6px 0 0 rgba(0, 0, 0, .2)",
      },
      borderWidth: {
        'custom': '1px',
      },
      borderColor: {
        'custom': 'rgba(255, 255, 255, 0.48)',
      },
      colors: {
       "black-rgba": "rgba(34, 34, 34, 0.93)",
        primary: "#FFC857",
        secondary: "#222",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "700",
          lineHeight: "1.5",
          border: "0px solid transparent",
          borderRadius: ".5rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          boxShadow: "6px 6px 0 0 rgba(0, 0, 0, .2)",
          transition: "all 0.3s ease",
        },
        ".btn-primary": {
          backgroundColor: "var(--color-primary)",
          color: "#222",
          "&:hover": {
            backgroundColor: "#222",
            color: "#fff",
            transform:"translate(0,-6px)",
            boxShadow:"8px 8px 0 0 rgba(0, 0, 0, .2)"
          },
          "&:active": {
            backgroundColor: "#222",
            color: "#fff",
          },
        },
        ".btn-secondary": {
          backgroundColor: "var(--color-secondary)",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#FFC857",
            color: "#222",
            transform:"translate(0,-6px)",
            boxShadow:"8px 8px 0 0 rgba(0, 0, 0, .2)"
          },
          "&:active": {
            backgroundColor: "#FFC857",
            color: "#222",
          },
        },
      });
    },
  ],
};
