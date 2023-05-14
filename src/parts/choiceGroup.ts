import type { ChoiceGroup, RawCommand } from '../types'

import { pickFirst, pickMany, pickObject } from '../utils/pick'

export default function read(t: RawCommand): ChoiceGroup {
  const clip = pickFirst(t, 'clip', 'object')

  return {
    _t: 'ChoiceGroup',
    choices: pickMany(t, 'choices', 'object').map((x) =>
      pickFirst(x, 'text', 'string')
    ),
    startTime: pickObject(clip, '_startTime', 'number'),
    duration: pickObject(clip, '_duration', 'number'),
  }
}
