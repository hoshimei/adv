import type { RawCommand, Title } from '../types'

import { tryPickFirst } from '../utils/pick'

export default function read(t: RawCommand): Title | null {
  const title = tryPickFirst(t, 'title', 'string')
  if (!title) {
    return null
  }
  return {
    _t: 'Title',
    title,
  }
}
