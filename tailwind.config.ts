/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      none: "none",
    }, 

    screens: {
      "sm": {"min": "150px", "max": "555px"},
      // => @media (min-width: 350px and max-width: 556px) { ... }
  
      "md": {"min": "556px", "max": "1023px"},
      // => @media (min-width: 556px and max-width: 1023px) { ... }
  
      "lg": {"min": "1024px", "max": "1279px"},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
      "xl": {"min": "1280px", "max": "1535px"},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
      "2xl": {"min": "1536px"},
      // => @media (min-width: 1536px) { ... }
    },
  
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
};
