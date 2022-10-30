import type { Se, RawCommand } from '../types'

import { pickFirst, pickObject } from '../utils/pick'

export default function read(t: RawCommand): Se {
  const clip = pickFirst(t, 'clip', 'object')
  return {
    _t: 'Se',
    se: pickFirst(t, 'se', 'string'),
    startTime: pickObject(clip, '_startTime', 'number'),
    duration: pickObject(clip, '_duration', 'number'),
  }
}
