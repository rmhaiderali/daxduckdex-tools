import { foundDucksUrls } from "./utils/found-ducks-urls.js"
import { makdulacDucksUrls } from "./utils/makdulac-ducks-urls.js"

const newDucks = foundDucksUrls.filter((e) => !makdulacDucksUrls.includes(e))

if (newDucks.length) {
  console.log(newDucks.length + " new ducks found")
  newDucks.forEach((e) => console.log(e))
} else {
  console.log("No new ducks found")
}
