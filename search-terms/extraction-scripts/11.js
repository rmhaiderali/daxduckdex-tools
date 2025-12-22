// espn team standings
Array.from(document.querySelectorAll("table"))
  .filter((_, i) => i % 2 == 0)
  .map((e) =>
    Array.from(e.querySelectorAll(".team-link:last-child"))
      .map((e) => e.innerText)
      .sort()
  )
