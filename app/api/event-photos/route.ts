import { promises as fs } from "node:fs"
import path from "node:path"
import { NextResponse } from "next/server"

const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"])

export async function GET() {
  const eventsDir = path.join(process.cwd(), "public", "assets", "images", "events")

  try {
    const entries = await fs.readdir(eventsDir, { withFileTypes: true })
    const photos = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => ALLOWED_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((name) => `/assets/images/events/${name}`)

    return NextResponse.json({ photos })
  } catch {
    return NextResponse.json({ photos: [] })
  }
}
