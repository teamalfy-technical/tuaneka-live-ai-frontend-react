// tailwind.config.js
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './index.html',       // For Vite's index.html
    './src/**/*.{js,jsx,ts,tsx}',  // Scan all JS, JSX, TS, and TSX files in src folder
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
};
