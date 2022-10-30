import type { Bgm, RawCommand } from '../types'

import { pickFirst, pickObject } from '../utils/pick'

export default function title(t: RawCommand): Bgm {
  const clip = pickFirst(t, 'clip', 'object')
  return {
    _t: 'Bgm',
    bgm: pickFirst(t, 'bgm', 'string'),
    startTime: pickObject(clip, '_startTime', 'number'),
    duration: pickObject(clip, '_duration', 'number'),
  }
}
