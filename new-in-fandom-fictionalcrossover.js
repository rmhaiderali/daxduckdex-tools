// Finds search terms from fandom that are NOT in makdulac

import { makdulacDucks } from "./utils/makdulac-ducks.js"
import searchTermsEntries from "./utils/fandom-fictionalcrossover-search-terms.js"
import { characterCorrections } from "./utils/character-corrections.js"

const makdulacLowerNames = makdulacDucks.map((d) => d.name.toLowerCase())

const notInMakdulac = []

for (const searchTermsEntry of searchTermsEntries) {
  const isAlreadyFound = searchTermsEntry.some((logo) => {
    const correctedLogo = characterCorrections[logo] || logo
    return makdulacLowerNames.includes(correctedLogo.toLowerCase())
  })
  if (!isAlreadyFound) notInMakdulac.push(searchTermsEntry)
}

if (notInMakdulac.length) {
  console.log(notInMakdulac.length + " new search terms found")
  notInMakdulac.forEach((e) => console.log(e.join(", ")))
} else {
  console.log("No new search terms found")
}
