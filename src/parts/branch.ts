import type { Branch, RawCommand } from '../types'

import { tryPickFirst } from '../utils/pick'

export default function read(t: RawCommand): Branch {
  return {
    _t: 'Branch',
    groupLength: tryPickFirst(t, 'groupLength', 'number') ?? 0,
  }
}
