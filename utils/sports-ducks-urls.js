process.chdir(import.meta.dirname + "/..")

import fs from "fs"

const files = [
  "09.en1-premier-league-2025.json",
  "09.en2-efl-championship-2025.json",
  //
  "09.es1-la-liga-2025.json",
  "09.es2-la-liga-2-2025.json",
  //
  "09.eu1-uefa-champions-league-2025.json",
  "09.eu2-uefa-europa-league-2025.json",
  "09.eu3-uefa-conference-league-2025.json",
  //
  "09.mls-2025.json",
  "10.mlb-2025.json",
  "10.nba-2025.json",
  "10.nfl-2025.json",
  "11.nhl-2025.json",
]

const logos = files
  .map((file) => JSON.parse(fs.readFileSync("found-logos/" + file, "utf-8")))
  .flat()

export const sportsDucksUrls = Array.from(new Set(logos))
