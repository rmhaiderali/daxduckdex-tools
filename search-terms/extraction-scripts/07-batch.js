process.chdir(import.meta.dirname + "/../..")

import fs from "fs"
import pc from "picocolors"
import { JSDOM } from "jsdom"
import chunkArray from "./chunk-array.js"

const startPage = ""
let nextPage = startPage

const charactersByPages = []

for (let i = 0; nextPage; i++) {
  console.log("Fetching page " + (i + 1) + " for: " + pc.yellow(nextPage))

  const response = await fetch(nextPage)

  if (!response.ok) {
    console.error(response.statusText)
    continue
  }

  if (!response.headers.get("content-type")?.includes("text/html")) {
    console.error("URL did not return HTML content")
    continue
  }

  const text = await response.text()
  const dom = new JSDOM(text)
  const document = dom.window.document

  nextPage = document.querySelector('[rel="next"]')?.getAttribute("href")

  const characters = Array.from(
    document.querySelectorAll(".category-page__member")
  )
    .filter((e) => !e.querySelector("svg"))
    .map((e) =>
      e.children[1].textContent.replace(/\s*\(.+?\)\s*/, "").split(/\s*\/\s*/)
    )
    .flat()

  if (characters) {
    console.log(pc.green("==>") + " " + characters.length + " characters found")
    charactersByPages.push(characters)
  } else {
    console.log(pc.red("==>") + " No characters found")
  }
}

const allCharacters = charactersByPages.flat()
const uniqueCharacters = Array.from(new Set(allCharacters)).sort()

if (uniqueCharacters.length) {
  const wiki = startPage.split("//")[1].split(".")[0]

  if (uniqueCharacters.length > 1000) {
    const chunks = chunkArray(uniqueCharacters, 1000)
    for (let i = 0; i < chunks.length; i++) {
      const file = "07." + wiki + "-part-" + (i + 1) + ".jsonc"
      const json = JSON.stringify(chunks[i], null, 2)
      const content = "// " + startPage + "\n" + json + "\n"
      fs.writeFileSync("search-terms/" + file, content)
    }
  }
  //
  else {
    const file = "07." + wiki + ".jsonc"
    const json = JSON.stringify(uniqueCharacters, null, 2)
    const content = "// " + startPage + "\n" + json + "\n"
    fs.writeFileSync("search-terms/" + file, content)
  }

  console.log("pages: " + charactersByPages.length)
  console.log("total characters: " + allCharacters.length)
  console.log("unique characters: " + uniqueCharacters.length)
} else {
  console.log("No characters found")
}
