// google team standings
const standings = Array.from(
  document.querySelectorAll(
    '[aria-label="Standings section"], [data-entityname="Match Standing"]',
  ),
)
standings
  .map((e) => Array.from(e.querySelectorAll("tbody")))
  .flat()
  .map((e) =>
    Array.from(e.children)
      .slice(1)
      .map((e) =>
        new URL(
          "http://" + e.getAttribute("data-url-to-team-osrp"),
        ).searchParams
          .get("q")
          ?.replaceAll(".", ""),
      )
      .sort(),
  )
