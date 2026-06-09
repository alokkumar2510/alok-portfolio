import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00E5FF",
        secondary: "#7C3AED",
        accent: "#22D3EE",
        bg: {
          DEFAULT: "#020308",
          900: "#05060d",
          800: "#0a0c18",
          700: "#11142a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        display: ["var(--font-syncopate)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 229, 255, 0.35), 0 0 60px rgba(124, 58, 237, 0.2)",
        "glow-sm": "0 0 12px rgba(0, 229, 255, 0.4)",
        "glow-lg": "0 0 60px rgba(0, 229, 255, 0.5), 0 0 120px rgba(124, 58, 237, 0.3)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(0,229,255,0.15) 0%, rgba(2,3,8,0) 70%)",
        "conic-gradient":
          "conic-gradient(from 0deg, #00E5FF, #7C3AED, #22D3EE, #00E5FF)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0,229,255,0.3)" },
          "100%": { boxShadow: "0 0 50px rgba(0,229,255,0.7)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
