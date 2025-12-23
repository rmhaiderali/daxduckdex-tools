process.chdir(import.meta.dirname)

import fs from "fs"
import path from "path"
import pc from "picocolors"
import prompts from "prompts"
import { JSDOM } from "jsdom"
import { diffArrays } from "diff"
import { parse } from "jsonc-parser"

const files = fs
  .readdirSync("search-terms/", { withFileTypes: true })
  .filter((dirent) => dirent.isFile())
  .map((dirent) => dirent.name)

function fileToTitle(str) {
  return str.split(".")[1].replaceAll("-", " ")
}

const { file } = await prompts(
  {
    name: "file",
    type: "select",
    message: "Select search terms file",
    choices: files.map((file) => ({ title: fileToTitle(file), value: file })),
  },
  { onCancel: () => process.exit() }
)

const { name } = path.parse(file)

const searchTermsFile = "search-terms/" + file
const logosFile = "found-logos/new/" + name + ".json"
const existingLogosFile = "found-logos/" + name + ".json"

const searchTerms = parse(fs.readFileSync(searchTermsFile, "utf-8"))

const logos = []

for (let i = 0; i < searchTerms.length; i++) {
  const searchTerm = searchTerms[i]
  console.log(
    "Fetching page " +
      (i + 1) +
      "/" +
      searchTerms.length +
      " for: " +
      pc.yellow(searchTerm)
  )

  const response = await fetch(
    "https://duckduckgo.com/?q=" + encodeURIComponent(searchTerm)
  )

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

  const logo =
    document
      .getElementsByClassName("header__logo")[0]
      ?.getAttribute("data-dynamic-logo") || null

  if (logo) {
    console.log(
      pc.green("==>") + " Found logo" + pc.magenta(logo.split("/").pop())
    )
    const fullLogo = "https://duckduckgo.com" + logo
    if (!logos.includes(fullLogo)) logos.push(fullLogo)
  } else {
    console.log(pc.red("==>") + " No logo found")
  }
}

if (logos.length) {
  fs.writeFileSync(logosFile, JSON.stringify(logos, null, 2))

  console.log(logos.length + " logos found for search terms\n")
  console.log("Diff:")

  const existingLogos = fs.existsSync(existingLogosFile)
    ? JSON.parse(fs.readFileSync(existingLogosFile, "utf-8"))
    : []

  const diff = diffArrays(existingLogos, logos)

  diff.forEach((part) => {
    const color = part.added ? pc.green : part.removed ? pc.red : pc.white
    const sign = part.added ? "+" : part.removed ? "-" : " "
    part.value.forEach((line) => console.log(color(sign + " " + line)))
  })
} else {
  console.log("No logos found")
}
