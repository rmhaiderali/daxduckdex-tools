// fetch makdulac ducks
import ms from "ms"

const makdulacApiUrl = "https://daxduckdex.rmha62.workers.dev/api/characters"

console.log("Requesting Makdulac ducks")

const makdulacResponse = await fetch(makdulacApiUrl, {
  signal: AbortSignal.timeout(ms("30s")),
})

if (!makdulacResponse.ok) {
  console.error("Failed to fetch from Makdulac API")
  process.exit(3)
}

if (
  !makdulacResponse.headers.get("content-type")?.includes("application/json")
) {
  console.error("Unexpected response from Makdulac API")
  process.exit(4)
}

const { characters } = await makdulacResponse.json()

console.log(characters.length + " ducks found on Makdulac")

export const makdulacDucks = characters
