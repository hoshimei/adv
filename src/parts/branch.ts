import type { Branch, RawCommand } from '../types'

import { pickFirst } from '../utils/pick'

export default function read(t: RawCommand): Branch {
  return {
    _t: 'Branch',
    groupLength: pickFirst(t, 'groupLength', 'number'),
  }
}
