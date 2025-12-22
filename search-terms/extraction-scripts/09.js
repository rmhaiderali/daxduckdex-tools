// google team standings
Array.from(
  document.querySelectorAll('[aria-label="Standings section"] tbody')
).map((e) =>
  Array.from(e.children)
    .slice(1)
    .map((e) =>
      new URL("http://" + e.getAttribute("data-url-to-team-osrp")).searchParams
        .get("q")
        ?.replaceAll(".", "")
    )
    .sort()
)
