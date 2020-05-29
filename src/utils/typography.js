import Typography from "typography"
// import kirkhamTheme from "typography-theme-kirkham"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.44,
  scaleRatio: 2.15,
  blockMarginBottom: 0.75,
  googleFonts: [
    {
      name: "Happy Monkey",
      styles: ["700"],
    },
    {
      name: "Playfair Display",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: ["Happy Monkey", "serif"],
  bodyFontFamily: ["Playfair Display", "serif"],
  headerColor: "hsla(0,0%,0%,1)",
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
})
export default typography
export const rhythm = typography.rhythm
