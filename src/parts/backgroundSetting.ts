import type { BackgroundSetting, RawCommand } from '../types'

import { tryPickFirst, pickFirst, pickObject } from '../utils/pick'

export default function read(t: RawCommand): BackgroundSetting {
  const settings = tryPickFirst(t, 'setting', 'object')
  const clip = pickFirst(t, 'clip', 'object')
  return {
    _t: 'BackgroundSetting',
    id: pickFirst(t, 'id', 'string'),
    startTime: pickObject(clip, '_startTime', 'number'),
    ...(settings && {
      position: {
        x: pickObject(settings, 'position.x', 'number'),
        y: pickObject(settings, 'position.y', 'number'),
      },
      scale: {
        x: pickObject(settings, 'scale.x', 'number'),
        y: pickObject(settings, 'scale.y', 'number'),
      },
    }),
  }
}
