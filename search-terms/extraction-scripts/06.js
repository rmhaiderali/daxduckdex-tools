// pokemondb
Array.from(
  new Set(
    Array.from(document.querySelector("tbody").children)
      .map((e) => e.children[1].children[0].innerText)
      .sort()
  )
)
