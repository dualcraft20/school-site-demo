import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        linen: "#f0e9e2",
        "light-gray": "#d4d4d4",
        "muted-purple": "#985299",
        crimson: "#d31f3a",
        "forest-green": "#1c6043",
        "midnight-blue": "#13375c",
        "dark-red": "#7d1334",
        charcoal: "#211f1d",
        "deep-plum": "#371336",
        "deep-maroon": "#501031",
        black: "#000000",
        "off-black": "#221111",
      },
      fontFamily: {
        display: ["'Anton'", "Impact", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        handwriting: ["'Caveat'", "cursive"],
        serif: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
