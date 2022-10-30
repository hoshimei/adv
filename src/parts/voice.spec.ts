import { expect, test } from 'vitest'
import voice from './voice'

test('voice', () => {
  expect(
    voice({
      args: [
        {
          key: 'voice',
          value: 'sud_vo_adv_event_2210_01_05-kkr001 actor',
        },
        {
          key: 'actorId',
          value: 'kkr',
        },
        {
          key: 'channel',
          value: 1,
        },
        {
          key: 'clip',
          value: {
            _blendInDuration: -1,
            _blendOutDuration: -1,
            _duration: 8.8274145126,
            _easeInDuration: 0,
            _easeOutDuration: 0,
            _mixInEaseType: 1,
            _mixOutEaseType: 1,
            _startTime: 0.8,
            _timeScale: 1,
          },
        },
      ],
      command: 'voice',
    })
  ).toStrictEqual({
    _t: 'Voice',
    actorId: 'kkr',
    channel: 1,
    duration: 8.8274145126,
    startTime: 0.8,
    voice: 'sud_vo_adv_event_2210_01_05-kkr001 actor',
  })
})
