process.chdir(import.meta.dirname)

import fs from "fs"

let ducks = JSON.parse(
  fs.readFileSync("ducks/makdulac-with-lastmodified.json", "utf-8")
)

ducks.forEach((d) => {
  d.last_modified = new Date(d.last_modified)
})

ducks = ducks.sort((a, b) => a.last_modified - b.last_modified)

ducks.forEach((d, i) => {
  d.name = i.toString().padStart(3, "0") + " " + d.name
})

fs.writeFileSync(
  "ducks/makdulac-with-lastmodified-and-sorted.json",
  JSON.stringify(ducks)
)
