export default function findRegion(
  s: string,
  e: string,
  str: string,
  startIndex: number
): number {
  if (str[startIndex] !== s) {
    throw Error('Internal: bad findRegion params')
  }
  let layer = 1
  for (let i = startIndex + 1; i < str.length; i++) {
    if (str[i] === s) {
      layer++
    } else if (str[i] === e) {
      layer--
      if (layer === 0) return i
    }
  }
  throw Error('Internal: non-terminating findRegion')
}
