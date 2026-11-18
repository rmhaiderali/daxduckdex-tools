// fetch wayback ducks

const waybackSearchParams = {
  fl: "original",
  limit: "10000",
  output: "json",
  collapse: "urlkey",
  matchType: "prefix",
  url: "https://duckduckgo.com/dist/logos/dynamic/",
}

const waybackApiUrl =
  "https://web.archive.org/web/timemap/json?" +
  new URLSearchParams(waybackSearchParams).toString()

console.log("Requesting Wayback ducks")

const waybackResponse = await fetch(waybackApiUrl)

if (!waybackResponse.ok) {
  console.error("Failed to fetch from Wayback API")
  process.exit(1)
}

if (
  !waybackResponse.headers.get("content-type")?.includes("application/json")
) {
  console.error("Unexpected response from Wayback API")
  process.exit(2)
}

const waybackData = await waybackResponse.json()

const characters = waybackData.slice(1).map((e) => {
  const url = new URL(e[0])
  return url.origin + url.pathname
})

const badLinks = [
  "https://duckduckgo.com/dist/logos/dynamic/",
  "https://duckduckgo.com/dist/logos/dynamic/(query).png",
  "https://duckduckgo.com/dist/logos/dynamic/batman.png)",
  // Removed Characters
  "https://duckduckgo.com/dist/logos/dynamic/bob_marley.png",
  "https://duckduckgo.com/dist/logos/dynamic/doomguy.png",
]

const uniqueCharacters = Array.from(new Set(characters))

const filteredCharacters = uniqueCharacters.filter((e) => !badLinks.includes(e))

console.log(filteredCharacters.length + " ducks found on Wayback")

export const waybackDucksUrls = filteredCharacters
