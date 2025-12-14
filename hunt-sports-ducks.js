import { sportsDucksUrls } from "./utils/sports-ducks-urls.js"
import { makdulacDucksUrls } from "./utils/makdulac-ducks-urls.js"

const newDucks = sportsDucksUrls.filter((e) => !makdulacDucksUrls.includes(e))

if (newDucks.length) {
  console.log(newDucks.length + " new ducks found")
  newDucks.forEach((e) => console.log(e))
} else {
  console.log("No new ducks found")
}
