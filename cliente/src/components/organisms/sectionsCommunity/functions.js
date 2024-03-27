export function arrayLimit (array, limit) {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    if (i < limit) newArray.push(array[i])
  }
  return newArray
}
