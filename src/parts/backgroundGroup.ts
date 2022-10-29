import type { BackgroundGroup, RawCommand, Title } from '../types'

import pickMany from '../utils/pickMany'
import pickFirst from '../utils/pickFirst'

export default function title(t: RawCommand): BackgroundGroup {
  return {
    _t: 'BackgroundGroup',
    backgrounds: pickMany(t, 'backgrounds', 'object').map(
      (x) => pickFirst(x as RawCommand, 'src', 'string') as string
    ),
  }
}
