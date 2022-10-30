import type { BackgroundGroup, RawCommand, Title } from '../types'

import { pickFirst, pickMany } from '../utils/pick'

export default function read(t: RawCommand): BackgroundGroup {
  return {
    _t: 'BackgroundGroup',
    backgrounds: pickMany(t, 'backgrounds', 'command').map((x) =>
      pickFirst(x, 'src', 'string')
    ),
  }
}
