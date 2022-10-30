import type { RawCommand, Title } from '../types'

import { pickFirst } from '../utils/pick'

export default function title(t: RawCommand): Title {
  return {
    _t: 'Title',
    title: pickFirst(t, 'title', 'string'),
  }
}
