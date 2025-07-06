import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        logo: "url('/images/logo.jpeg')", 
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
