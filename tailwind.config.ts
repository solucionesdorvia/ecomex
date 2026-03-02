import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["General Sans", "system-ui", "sans-serif"]
      },
      colors: {
        midnight: "#070b12",
        obsidian: "#0c111b",
        steel: "#121a27",
        cobalt: "#1f6feb",
        azure: "#3b82f6",
        gold: "#f5c15b",
        mist: "#b3c1d1"
      },
      boxShadow: {
        glow: "0 0 30px rgba(59, 130, 246, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
