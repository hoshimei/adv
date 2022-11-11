import type { Message, RawCommand } from '../types'

import { pickFirst, tryPickFirst } from '../utils/pick'

export default function read(t: RawCommand): Message | null {
  const text = tryPickFirst(t, 'text', 'string')
  if (!text) return null
  return {
    _t: 'Message',
    text,
    // QA had an null name at adv_event_2209_01_01.txt.
    name: tryPickFirst(t, 'name', 'string') ?? '',
    thumbnail: tryPickFirst(
      t,
      'thumbnial', // QA English!
      'string'
    ),
  }
}
