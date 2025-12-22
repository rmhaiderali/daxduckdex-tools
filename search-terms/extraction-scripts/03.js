// google (characters of book)
let [one, two] = Array.from(
  document.querySelector('[data-attrid*="characters"]').children[0].children
)
Array.from(
  new Set(
    Array.from(one.children)
      .concat(
        Array.from(two.children[0].children[0].children[0].children[0].children)
      )
      .map((e) => e.innerText)
      .filter(Boolean)
      .sort()
  )
)
