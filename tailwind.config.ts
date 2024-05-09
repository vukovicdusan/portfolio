import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primaryAccent: "var(--color-primary)",
        secondaryAccent: "var(--color-secondary)",
        tertiaryAccent: "var(--color-tertiary)",
        quaternaryAccent: "var(--color-quaternary)",
        quinaryAccent: "var(--color-quinary)",
        darkColor: "var(--color-dark)",
        midColor: "var(--color-mid)",
        lightColor: "var(--color-light)",
      },
      spacing: {
        wrapperWidth: "clamp(16rem, 93vw, 75rem)",
        wrapperPadding: "clamp(1.09rem, 1rem + 0.47vw, 1.33rem)",
      },
      animation: {
        "spin-slow": "spin 50s linear infinite",
      },
      fontFamily: {
        mona: ["var(--mona)"],
        cubano: ["var(--cubano)"],
      },
    },
  },
  plugins: [],
};
export default config;
