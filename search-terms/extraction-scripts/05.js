// wikipedia
Array.from(
  new Set(
    Array.from(document.querySelectorAll(".wikitable tbody"))
      .map((e) => Array.from(e.children).slice(1))
      .flat()
      .map((e) => e.children[0].innerText)
      .sort()
  )
)
