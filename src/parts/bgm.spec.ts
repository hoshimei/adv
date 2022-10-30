import { expect, test } from 'vitest'
import bgm from './bgm'

test('bgm', () => {
  expect(
    bgm({
      args: [
        {
          key: 'bgm',
          value: 'sud_bgm_adv_liz-01',
        },
        {
          key: 'clip',
          value: {
            _blendInDuration: 0,
            _blendOutDuration: 0,
            _duration: 74.4333333333,
            _easeInDuration: 0,
            _easeOutDuration: 1,
            _mixInEaseType: 1,
            _mixOutEaseType: 1,
            _startTime: 0,
            _timeScale: 1,
          },
        },
      ],
      command: 'bgm',
    })
  ).toStrictEqual({
    _t: 'Bgm',
    bgm: 'sud_bgm_adv_liz-01',
    startTime: 0,
    duration: 74.4333333333,
  })
})
