// fandom (https://kimetsu-no-yaiba.fandom.com/wiki/Characters like)
Array.from(
  new Set(
    Array.from(document.querySelectorAll(".wds-is-current small b"))
      .map((e, i) => {
        const t = e.innerText
        e.innerHTML = i
        return t
      })
      .sort()
  )
)
