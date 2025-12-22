// google (characters)
Array.from(
  new Set(
    Array.from(document.querySelectorAll('[data-attrid$="characters"]'))
      .slice(1)
      .map((e) => e.getAttribute("title"))
      .sort()
  )
)
