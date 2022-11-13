import { expect, test } from 'vitest'
import narration from './narration'

test('title', () => {
  expect(
    narration({
      command: 'narration',
      args: [
        {
          key: 'text',
          value: '――瑠依がバンプロの養成所へ入所してから',
        },
        {
          key: 'clip',
          value: {
            _startTime: 0,
            _duration: 2.7999999788072376,
            _easeInDuration: 0,
            _easeOutDuration: 0,
            _blendInDuration: -1,
            _blendOutDuration: -1,
            _mixInEaseType: 1,
            _mixOutEaseType: 1,
            _timeScale: 1,
          },
        },
      ],
    })
  ).toStrictEqual({
    _t: 'Narration',
    text: '――瑠依がバンプロの養成所へ入所してから',
    startTime: 0,
  })
})
