// google (people also search for)
Array.from(
  new Set(
    Array.from(temp1.children)
      .map((e) => e.innerText.replaceAll("\n", " "))
      .sort()
  )
)
