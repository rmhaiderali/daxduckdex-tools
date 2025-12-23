export default function chunkArray(arr, chunkSize) {
  const chunkedArr = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    chunkedArr.push(chunk)
  }
  return chunkedArr
}
