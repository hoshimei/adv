import type { Voice, RawCommand } from '../types'

import { pickFirst, pickObject, tryPickFirst } from '../utils/pick'

export default function read(t: RawCommand): Voice {
  const clip = pickFirst(t, 'clip', 'object')
  const channel = tryPickFirst(t, 'channel', 'number')
  return {
    _t: 'Voice',
    voice: pickFirst(t, 'voice', 'string'),
    actorId: tryPickFirst(t, 'actorId', 'string'),
    startTime: pickObject(clip, '_startTime', 'number'),
    duration: pickObject(clip, '_duration', 'number'),
    ...(channel !== undefined
      ? {
          channel,
        }
      : {}),
  }
}
