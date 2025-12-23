process.chdir(import.meta.dirname)

import fs from "fs"

const ducks = JSON.parse(fs.readFileSync("ducks/makdulac-sorted.json", "utf-8"))

let count = 0

for (const duck of ducks) {
  console.log(++count + "/" + ducks.length + " fetching " + duck.name)
  const response = await fetch(duck.url, { method: "HEAD" })

  if (!response.ok) {
    console.error("Failed to fetch " + duck.url + " " + response.statusText)
    continue
  }

  duck.last_modified = new Date(response.headers.get("last-modified"))
}

fs.writeFileSync("ducks/makdulac-with-lastmodified.json", JSON.stringify(ducks))
