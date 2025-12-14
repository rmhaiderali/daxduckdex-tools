// fetch makdulac ducks

const makdulacApiUrl = "https://api.makdulac.com/api/characters"

console.log("Requesting Makdulac ducks")

const makdulacResponse = await fetch(makdulacApiUrl)

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

let makdulacData = await makdulacResponse.json()

makdulacData = makdulacData.characters

console.log(makdulacData.length + " ducks found on Makdulac")

export const makdulacDucks = makdulacData
