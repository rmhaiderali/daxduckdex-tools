// google search ai
Array.from(document.querySelectorAll("strong"))
  .map((e) => e.innerText.replace(/:$/, "").split("/"))
  .flat()
