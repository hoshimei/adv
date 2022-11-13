import type { Narration, RawCommand } from '../types'

import { pickFirst, pickObject } from '../utils/pick'

export default function read(t: RawCommand): Narration {
  const text = pickFirst(t, 'text', 'string')
  const clip = pickFirst(t, 'clip', 'object')
  return {
    _t: 'Narration',
    text,
    startTime: pickObject(clip, '_startTime', 'number'),
  }
}
