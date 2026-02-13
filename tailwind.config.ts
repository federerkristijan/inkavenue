import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#E5AF97",
        brand: "#63B7B4",
        heading: "#2A1E1A",
        text: "#3B2F2A",
        muted: "#6B4A40",
        light: "#FFF3ED",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,.15)",
        section: "0 16px 50px rgba(0,0,0,.12)",
        heavy: "0 20px 60px rgba(0,0,0,.2)",
      },
    },
  },
  plugins: [],
};

export default config;
