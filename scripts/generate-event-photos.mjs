import { promises as fs } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, "..")

const eventsDir = path.join(projectRoot, "public", "assets", "images", "events")
const outputPath = path.join(eventsDir, "photos.json")
const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"])

async function generateEventPhotosManifest() {
  try {
    const entries = await fs.readdir(eventsDir, { withFileTypes: true })

    const photos = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => allowedExtensions.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((name) => `/assets/images/events/${name}`)

    await fs.writeFile(outputPath, JSON.stringify({ photos }, null, 2) + "\n", "utf8")
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      await fs.mkdir(eventsDir, { recursive: true })
      await fs.writeFile(outputPath, JSON.stringify({ photos: [] }, null, 2) + "\n", "utf8")
      return
    }

    throw error
  }
}

await generateEventPhotosManifest()
