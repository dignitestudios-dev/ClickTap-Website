import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter-tight)", "Inter Tight", "sans-serif"],
      },
      colors: {
        primary: "#01C2FE",
        accent: "#A9C921",
        dark: "#00161D",
        bg: "#F1FCFF",
        card: "#E1F8FF",
        border: "#DBF7FF",
      },
    },
  },
  plugins: [],
};
export default config;
