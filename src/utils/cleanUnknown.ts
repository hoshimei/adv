import type { Line } from '../types'

export default function cleanUnknown(ret: Line[]): Line[] {
  for (let i = 0; i < ret.length; i++) {
    const item = ret[i]
    if (item._t !== 'Branch') {
      continue
    }
    item.groupLength = ret
      .slice(i + 1, i + 1 + item.groupLength)
      .filter((x) => x._t !== 'Unknown').length
  }
  return ret.filter((x) => x._t !== 'Unknown')
}
