// fandom
Array.from(
  new Set(
    Array.from(document.querySelectorAll(".category-page__member"))
      .filter((e) => !e.querySelector("svg"))
      .map((e) => e.children[1].innerText.replace(/ \(.+\)$/, ""))
  )
)
