import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#3a3a3a', // Fondo principal: jet, oscuro para buen contraste
        'foreground': '#f5f5f5', // Texto principal: white-smoke, claro para contraste
        'accent': '#f9c5b3', // Elementos destacados: melon
        'muted': '#d1d1d1', // Texto secundario: timberwolf, menos contraste
        'border': '#e8e3e3', // Bordes y separadores: platinum
      },
    },
  },
  plugins: [],
} satisfies Config;
