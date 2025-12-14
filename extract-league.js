const searchTerms = Array.from(temp1.children)
  .slice(1)
  .map((e) =>
    new URL(
      "http://" + e.getAttribute("data-url-to-team-osrp")
    ).searchParams.get("q")
  )

console.log(
  searchTerms.map(
    (e) =>
      "https://duckduckgo.com/?q=" + e?.replaceAll(".", "").replaceAll(" ", "+")
  )
)
