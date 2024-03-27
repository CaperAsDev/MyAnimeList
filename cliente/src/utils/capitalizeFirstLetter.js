export function capitalizeFirstLetter (string) {
  const firstLetter = string.charAt(0).toUpperCase()
  const newString = Array(...string).toSpliced(0, 1, firstLetter).join('')
  return newString
}
