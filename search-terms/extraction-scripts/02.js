// google (cast)
Array.from(
  new Set(
    Array.from(
      document.querySelectorAll('[data-attrid^="kc:"] > div a wp-grid-tile')
    )
      .map((e) => e.children[1].children[1].innerText.split(", "))
      .flat()
      .filter(Boolean)
      .sort()
  )
)
