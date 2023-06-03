const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "soul-blue": "0 20px 20px -15px rgba(24,73,149, 0.3)",
      },

      backgroundColor: {
        "soul-blue": "#184995",
        "soul-red": "#b17aa1",
        "soul-yellow": "#f5b6a4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, rgba(139,244,254,0.09) 0%, rgba(222,250,82,0.09) 100%)",
        "gradient-linear": "linear-gradient(135deg, rgba(139,244,254,0.09) 0%, rgba(222,250,82,0.09) 100%)",
        "gradient-linear-2": "linear-gradient(0deg, rgba(178,74,252,0.09) 0%, rgba(250,115,112,0.09) 100%)",
        "gradient-linear-3": "linear-gradient(135deg, rgba(148,254,118,0.16) 0%, rgba(250,117,208,0.16) 100%)",
        "gradient-linear-4": "linear-gradient(180deg, rgba(109,109,253,0.26) 0%, rgba(247,75,218,0.26) 100%)",
        "gradient-linear-5": "linear-gradient(180deg, rgba(24,73,149,0.26) 0%, rgba(245,182,164,0.26) 100%)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
