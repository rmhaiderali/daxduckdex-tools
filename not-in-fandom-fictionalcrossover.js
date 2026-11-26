// Finds characters from makdulac that are NOT in fandom

import fs from "fs"
import { makdulacDucks } from "./utils/makdulac-ducks.js"
import searchTermsEntries from "./utils/fandom-fictionalcrossover-search-terms.js"
import { characterCorrections } from "./utils/character-corrections.js"

process.chdir(import.meta.dirname)

const characterCorrectionsSwapped = Object.fromEntries(
  Object.entries(characterCorrections).map(([k, v]) => [v, k]),
)

const fandomLowerNames = searchTermsEntries.flat().map((e) => e.toLowerCase())

const notInFandom = []

for (const duck of makdulacDucks) {
  const correctedName = characterCorrectionsSwapped[duck.name]
  const isAlreadyFound =
    fandomLowerNames.includes(duck.name.toLowerCase()) ||
    fandomLowerNames.includes(correctedName?.toLowerCase())
  if (!isAlreadyFound) notInFandom.push(duck)
}

if (notInFandom.length) {
  console.log(notInFandom.length + " new characters found")
  const outputPath = "temp/not-in-fandom-fictionalcrossover.json"
  fs.writeFileSync(outputPath, JSON.stringify(notInFandom))
  console.log("Saved to " + outputPath)
} else {
  console.log("No new characters found")
}
