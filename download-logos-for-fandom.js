import fs from "fs"
import { pipeline } from "node:stream/promises"
import notInFandom from "./temp/not-in-fandom.json" with { type: "json" }

process.chdir(import.meta.dirname)

const logosDir = "temp/logos-for-fandom"

if (!fs.existsSync(logosDir)) fs.mkdirSync(logosDir)

async function downloadImage(url, outputPath) {
  const response = await fetch(url)

  if (!response.ok || !response.body) {
    await response.body?.cancel()
    throw new Error(
      "Failed to fetch image: " + response.status + " " + response.statusText,
    )
  }

  const fileStream = fs.createWriteStream(outputPath)
  await pipeline(response.body, fileStream)
}

for (const duck of notInFandom) {
  console.log("Downloading image for " + duck.name)
  await downloadImage(duck.url, logosDir + "/DuckDuckGo " + duck.name + ".png")
}
