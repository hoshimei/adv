import type { Message, RawCommand } from '../types'

import { pickFirst } from '../utils/pick'

export default function read(t: RawCommand): Message {
  return {
    _t: 'Message',
    text: pickFirst(t, 'text', 'string'),
    name: pickFirst(t, 'name', 'string'),
    thumbnail: pickFirst(
      t,
      'thumbnial', // QA English!
      'string'
    ),
  }
}
