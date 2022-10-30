import type { Message, RawCommand } from '../types'

import { pickFirst, tryPickFirst } from '../utils/pick'

export default function read(t: RawCommand): Message {
  return {
    _t: 'Message',
    text: pickFirst(t, 'text', 'string'),
    name: pickFirst(t, 'name', 'string'),
    thumbnail: tryPickFirst(
      t,
      'thumbnial', // QA English!
      'string'
    ),
  }
}
