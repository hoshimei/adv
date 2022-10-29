import { expect, test, describe } from 'vitest'
import parseCommand from './parseCommand'

test('normal', () => {
  expect(parseCommand('[a b=c]')).toStrictEqual({
    command: 'a',
    args: [
      {
        key: 'b',
        value: 'c',
      },
    ],
  })
})

test('duplicated key', () => {
  expect(parseCommand('[a b=c b=c]')).toStrictEqual({
    command: 'a',
    args: [
      {
        key: 'b',
        value: 'c',
      },
      {
        key: 'b',
        value: 'c',
      },
    ],
  })
})

test('command', () => {
  expect(parseCommand('[a b=[d e=f] c=[g h=i]]')).toStrictEqual({
    command: 'a',
    args: [
      {
        key: 'b',
        value: {
          command: 'd',
          args: [
            {
              key: 'e',
              value: 'f',
            },
          ],
        },
      },
      {
        key: 'c',
        value: {
          command: 'g',
          args: [
            {
              key: 'h',
              value: 'i',
            },
          ],
        },
      },
    ],
  })
})

test('nested command', () => {
  expect(parseCommand('[a b=[d e=[f g=h]]]')).toStrictEqual({
    command: 'a',
    args: [
      {
        key: 'b',
        value: {
          command: 'd',
          args: [
            {
              key: 'e',
              value: {
                command: 'f',
                args: [
                  {
                    key: 'g',
                    value: 'h',
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  })
})

test('object', () => {
  const str = `[bgm bgm=sud_bgm_adv_liz-01 clip=\\{"_startTime":0.0,"_duration":74.4333333333,"_easeInDuration":0.0,"_easeOutDuration":1.0,"_blendInDuration":0.0,"_blendOutDuration":0.0,"_mixInEaseType":1,"_mixOutEaseType":1,"_timeScale":1.0\\}]`
  expect(parseCommand(str)).toStrictEqual({
    command: 'bgm',
    args: [
      { key: 'bgm', value: 'sud_bgm_adv_liz-01' },
      {
        key: 'clip',
        value: {
          _startTime: 0.0,
          _duration: 74.4333333333,
          _easeInDuration: 0.0,
          _easeOutDuration: 1.0,
          _blendInDuration: 0.0,
          _blendOutDuration: 0.0,
          _mixInEaseType: 1,
          _mixOutEaseType: 1,
          _timeScale: 1.0,
        },
      },
    ],
  })
})
