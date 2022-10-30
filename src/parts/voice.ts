import type { Voice, RawCommand } from '../types'

import { pickFirst, pickObject, tryPickFirst } from '../utils/pick'

export default function read(t: RawCommand): Voice {
  const clip = pickFirst(t, 'clip', 'object')
  return {
    _t: 'Voice',
    voice: pickFirst(t, 'voice', 'string'),
    actorId: tryPickFirst(t, 'actorId', 'string'),
    channel: pickFirst(t, 'channel', 'number'),
    startTime: pickObject(clip, '_startTime', 'number'),
    duration: pickObject(clip, '_duration', 'number'),
  }
}
