const ducks = []

console.log("total", ducks.length)

const countByDiscoverer = ducks.reduce((acc, { discoverer }) => {
  acc[discoverer] = (acc[discoverer] || 0) + 1
  return acc
}, {})

console.log(countByDiscoverer)
