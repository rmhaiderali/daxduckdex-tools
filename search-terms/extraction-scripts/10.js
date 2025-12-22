// duckduckgo team standings
Array.from(document.querySelectorAll("ol section > div:last-child a"))
  .map((e) =>
    new URL("http://1" + e.getAttribute("href")).searchParams
      .get("q")
      .split(" ")
      .slice(0, -1)
      .join(" ")
  )
  .sort()
