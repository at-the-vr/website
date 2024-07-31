/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        sm: "clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vi + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vi + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vi + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vi + 2.52rem, 6.66rem)",
      },
      fontFamily: {
        display: ["Silkscreen", defaultTheme.fontFamily.serif],
        body: ["Geist", defaultTheme.fontFamily.sans],
        mono: ["Geist-Mono", defaultTheme.fontFamily.mono],
      },
      animation: {
        marquee1: "marquee1 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee1: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        primary: "hsl(8.5,82.4%,53.1%)",
      },
    },
  },
  plugins: [],
};
