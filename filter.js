process.chdir(import.meta.dirname)

import fs from "fs"
import { makdulacDucks } from "./utils/makdulac-ducks.js"
import { foundDucksUrls } from "./utils/found-ducks-urls.js"
import { sportsDucksUrls } from "./utils/sports-ducks-urls.js"

fs.writeFileSync(
  "ducks/makdulac-excluding-found.json",
  JSON.stringify(makdulacDucks.filter((e) => !foundDucksUrls.includes(e.url)))
)

fs.writeFileSync(
  "ducks/makdulac-only-found.json",
  JSON.stringify(makdulacDucks.filter((e) => foundDucksUrls.includes(e.url)))
)

fs.writeFileSync(
  "ducks/makdulac-excluding-sports.json",
  JSON.stringify(makdulacDucks.filter((e) => !sportsDucksUrls.includes(e.url)))
)

fs.writeFileSync(
  "ducks/makdulac-only-sports.json",
  JSON.stringify(makdulacDucks.filter((e) => sportsDucksUrls.includes(e.url)))
)

fs.writeFileSync(
  "ducks/makdulac-sorted.json",
  JSON.stringify(makdulacDucks.sort((a, b) => a.id - b.id))
)
