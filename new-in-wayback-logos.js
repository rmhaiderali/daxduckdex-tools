import { waybackDucksUrls } from "./utils/wayback-ducks-urls.js"
import { makdulacDucksUrls } from "./utils/makdulac-ducks-urls.js"

const newDucks = waybackDucksUrls.filter((e) => {
  const url = new URL(e)
  return !makdulacDucksUrls.includes(url.origin + url.pathname)
})

if (newDucks.length) {
  console.log(newDucks.length + " new ducks found")
  newDucks.forEach((e) => console.log(e))
} else {
  console.log("No new ducks found")
}
