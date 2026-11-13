import fs from "fs"
import pc from "picocolors"
import { parse } from "jsonc-parser"

const dir = "search-terms"

let total = 0

for (const entry of fs.readdirSync(dir)) {
  if (!entry.endsWith(".jsonc")) continue
  const content = fs.readFileSync(dir + "/" + entry, "utf-8")
  const json = parse(content)
  const count = json.length.toString().padStart(3, "0")
  console.log(pc.yellow(count), entry)
  total += parseInt(json.length)
}

console.log("=====================")
console.log("Total: " + total)
