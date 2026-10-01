import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xxs: "400px",
        xs: "500px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        arigato: ["var(--font-arigato)"],
        sans: ["var(--font-gabarito)"],
        inter: ["var(--font-inter)"],
        ubuntu: ["var(--font-ubuntu)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
