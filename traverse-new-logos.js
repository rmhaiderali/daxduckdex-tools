// Paste in devtools console
Array.from(document.querySelectorAll(".new-badge")).map(
  (e, i) => (e.id = i + 1)
)

// Navigate to the first item
location.href = location.href.split("#")[0] + "#1"

// Navigate to the second item
location.href = location.href.split("#")[0] + "#2"

// and so on
