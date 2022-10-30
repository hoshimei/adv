import type { RawCommand, Title } from '../types'

import { pickFirst } from '../utils/pick'

export default function read(t: RawCommand): Title {
  return {
    _t: 'Title',
    title: pickFirst(t, 'title', 'string'),
  }
}
