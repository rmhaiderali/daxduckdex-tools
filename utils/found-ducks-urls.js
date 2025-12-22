// process.chdir(import.meta.dirname)

import fs from "fs"

const files = fs
  .readdirSync("found-logos/", { withFileTypes: true })
  .filter((dirent) => dirent.isFile())
  .map((dirent) => dirent.name)

const logos = files
  .map((file) => JSON.parse(fs.readFileSync("found-logos/" + file, "utf-8")))
  .flat()

export const foundDucksUrls = Array.from(new Set(logos))
