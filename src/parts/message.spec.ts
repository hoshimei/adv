import { expect, test } from 'vitest'
import message from './message'

test('title', () => {
  expect(
    message({
      args: [
        {
          key: 'text',
          value: '星見市のみなさん、新生LizNoirの',
        },
        {
          key: 'name',
          value: '赤崎こころ',
        },
        {
          key: 'thumbnial',
          value: 'img_chr_adv_kkr-00',
        },
        {
          key: 'clip',
          value: {
            _blendInDuration: -1,
            _blendOutDuration: -1,
            _duration: 3.6666666667,
            _easeInDuration: 0,
            _easeOutDuration: 0,
            _mixInEaseType: 1,
            _mixOutEaseType: 1,
            _startTime: 0.8,
            _timeScale: 1,
          },
        },
      ],
      command: 'message',
    })
  ).toStrictEqual({
    _t: 'Message',
    name: '赤崎こころ',
    text: '星見市のみなさん、新生LizNoirの',
    thumbnail: 'img_chr_adv_kkr-00',
  })
})

test('null text', () => {
  expect(
    message({
      command: 'message',
      args: [
        {
          key: 'clip',
          value: {
            _startTime: 278.4,
            _duration: 1,
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
  ).toStrictEqual(null)
})
