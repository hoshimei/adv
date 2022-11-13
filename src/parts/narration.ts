import type { Narration, RawCommand } from '../types'

import { pickFirst, pickObject, tryPickFirst } from '../utils/pick'

export default function read(t: RawCommand): Narration | null {
  const text = tryPickFirst(t, 'text', 'string')
  if (!text) {
    return null
  }
  const clip = pickFirst(t, 'clip', 'object')
  return {
    _t: 'Narration',
    text,
    startTime: pickObject(clip, '_startTime', 'number'),
  }
}
