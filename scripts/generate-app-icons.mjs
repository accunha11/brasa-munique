/**
 * Regenerates `app/icon.png` and `app/apple-icon.png` from `public/logo.png`.
 * Run after updating the logo: `node scripts/generate-app-icons.mjs`
 */
import sharp from "sharp"

const input = "public/logo.png"

await sharp(input)
  .resize(64, 64, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile("app/icon.png")

await sharp(input)
  .resize(180, 180, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile("app/apple-icon.png")

console.log("Updated app/icon.png and app/apple-icon.png from", input)
