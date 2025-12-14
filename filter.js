import fs from "fs"
import { makdulacDucks } from "./utils/makdulac-ducks.js"
import { sportsDucksUrls } from "./utils/sports-ducks-urls.js"

fs.writeFileSync(
  "filtered/makdulac-excluding-sports.json",
  JSON.stringify(makdulacDucks.filter((e) => !sportsDucksUrls.includes(e.url)))
)

fs.writeFileSync(
  "filtered/makdulac-only-sports.json",
  JSON.stringify(makdulacDucks.filter((e) => sportsDucksUrls.includes(e.url)))
)

fs.writeFileSync(
  "filtered/makdulac-sorted.json",
  JSON.stringify(makdulacDucks.sort((a, b) => a.id - b.id))
)
