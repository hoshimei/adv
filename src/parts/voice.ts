import type { Voice, RawCommand } from '../types'

import { pickFirst, pickObject, tryPickFirst } from '../utils/pick'

export default function read(t: RawCommand): Voice | null {
  const clip = pickFirst(t, 'clip', 'object')
  const duration = pickObject(clip, '_duration', 'number')

  // Patch issues for ご褒美くれないかなぁ or otherwise Kokoro will be upset
  if (duration === 0) return null

  const channel = tryPickFirst(t, 'channel', 'number')
  return {
    _t: 'Voice',
    voice: pickFirst(t, 'voice', 'string'),
    actorId: tryPickFirst(t, 'actorId', 'string'),
    startTime: pickObject(clip, '_startTime', 'number'),
    duration,
    ...(channel !== undefined
      ? {
        channel,
      }
      : {}),
  }
}
