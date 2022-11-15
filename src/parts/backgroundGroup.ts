import type { BackgroundGroup, RawCommand, Title } from '../types'

import { pickFirst, pickMany } from '../utils/pick'

export default function read(t: RawCommand): BackgroundGroup {
  const backgrounds: Record<string, string> = {}
  for (const i of pickMany(t, 'backgrounds', 'command')) {
    const src = pickFirst(i, 'src', 'string')
    const id = pickFirst(i, 'id', 'string')
    backgrounds[id] = src
  }
  return {
    _t: 'BackgroundGroup',
    backgrounds,
  }
}
