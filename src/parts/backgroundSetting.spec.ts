import { expect, test } from 'vitest'
import backgroundSetting from './backgroundSetting'

test('without setting', () => {
  expect(
    backgroundSetting({
      args: [
        {
          key: 'id',
          value: 'livestage-00-noon',
        },
        {
          key: 'clip',
          value: {
            _blendInDuration: -1,
            _blendOutDuration: -1,
            _duration: 0,
            _easeInDuration: 0,
            _easeOutDuration: 0,
            _mixInEaseType: 1,
            _mixOutEaseType: 1,
            _startTime: 10.1333333333,
            _timeScale: 1,
          },
        },
      ],
      command: 'backgroundsetting',
    })
  ).toStrictEqual({
    _t: 'BackgroundSetting',
    id: 'livestage-00-noon',
    startTime: 10.1333333333,
  })
})

test('with setting', () => {
  expect(
    backgroundSetting({
      args: [
        {
          key: 'id',
          value: 'livestage-00-noon',
        },
        {
          key: 'setting',
          value: {
            angle: 0,
            position: {
              x: 1,
              y: 2,
            },
            scale: {
              x: 3,
              y: 4,
            },
          },
        },
        {
          key: 'clip',
          value: {
            _blendInDuration: -1,
            _blendOutDuration: -1,
            _duration: 0,
            _easeInDuration: 0,
            _easeOutDuration: 0,
            _mixInEaseType: 1,
            _mixOutEaseType: 1,
            _startTime: 5,
            _timeScale: 1,
          },
        },
      ],
      command: 'backgroundsetting',
    })
  ).toStrictEqual({
    _t: 'BackgroundSetting',
    id: 'livestage-00-noon',
    startTime: 5,
    position: {
      x: 1,
      y: 2,
    },
    scale: { x: 3, y: 4 },
  })
})

test('without clip', () => {
  expect(
    backgroundSetting({
      args: [
        {
          key: 'id',
          value: 'livestage-00-noon',
        },
      ],
      command: 'backgroundsetting',
    })
  ).toStrictEqual({
    _t: 'BackgroundSetting',
    id: 'livestage-00-noon',
    startTime: 0,
  })
})
