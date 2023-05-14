import type { BranchGroup, RawCommand } from '../types'

import { pickFirst } from '../utils/pick'

export default function read(t: RawCommand): BranchGroup {
  return {
    _t: 'BranchGroup',
    type: 'Choice',
    groupLength: pickFirst(t, 'groupLength', 'number'),
  }
}
