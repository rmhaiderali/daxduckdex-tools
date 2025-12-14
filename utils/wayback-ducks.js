// fetch wayback ducks

const waybackSearchParams = {
  limit: "10000",
  output: "json",
  matchType: "prefix",
  collapse: "urlkey",
  filter: "!statuscode:[45]..",
  url: "https://duckduckgo.com/dist/logos/dynamic/",
  fl: "original,mimetype,timestamp,endtimestamp,groupcount,uniqcount",
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

let waybackData = await waybackResponse.json()

waybackData = waybackData.slice(1)

console.log(waybackData.length + " ducks found on Wayback ")

export const waybackDucks = waybackData
