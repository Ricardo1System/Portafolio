/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        theme1: {
          primary: "#116D6E", // Color primario del tema 1
          secondary: "#321E1E", // Color secundario del tema 1
          textPrimary: "#4E3636", // Color de texto primario del tema 1
          textSecondary: "#CD1818", // Color de texto secundario del tema 1
        },
        theme2: {
          primary: "#27374D", // Fondo Verde oscuro
          secondary: "#526D82",// Contorno Verde claro
          textPrimary: "#9DB2BF", // Texto Celeste
          textSecondary: "#DDE6ED", // Texto Pink
        },
        theme3: {
          primary: "#2C3639", // Color primario del tema 3
          secondary: "#3F4E4F",
          textPrimary: "#A27B5C", // Color de texto primario del tema 1
          textSecondary: "#DCD7C9", // Color de texto secundario del tema 1
        },
      },
    },
  },
  plugins: []
}
