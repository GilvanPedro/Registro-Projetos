import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f14",
        surface: "#181820",
        accent: "#7c5cff",
      },
    },
  },
  plugins: [],
};
export default config;
