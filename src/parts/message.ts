import type { Message, RawCommand } from '../types'

import pickFirst from '../utils/pickFirst'

export default function message(t: RawCommand): Message {
  return {
    _t: 'Message',
    text: pickFirst(t, 'text', 'string') as string,
    name: pickFirst(t, 'name', 'string') as string,
    thumbnail: pickFirst(
      t,
      'thumbnial', // QA English!
      'string'
    ) as string,
  }
}
