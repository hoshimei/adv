import { expect, test } from 'vitest'
import se from './se'

test('se', () => {
  expect(
    se({
      args: [
        {
          key: 'se',
          value: 'sud_se_adv_cheers-in-01',
        },
        {
          key: 'clip',
          value: {
            _blendInDuration: 0,
            _blendOutDuration: 0,
            _duration: 4.021437645,
            _easeInDuration: 0,
            _easeOutDuration: 0.5,
            _mixInEaseType: 1,
            _mixOutEaseType: 1,
            _startTime: 8.4,
            _timeScale: 1,
          },
        },
      ],
      command: 'se',
    })
  ).toStrictEqual({
    _t: 'Se',
    se: 'sud_se_adv_cheers-in-01',
    startTime: 8.4,
    duration: 4.021437645,
  })
})
