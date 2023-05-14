import { expect, test } from 'vitest'
import choiceGroup from './choiceGroup'

test('choiceGroup', () => {
  expect(
    choiceGroup({
      command: 'choicegroup',
      args: [
        {
          key: 'choices',
          value: {
            command: 'choice',
            args: [{ key: 'text', value: '一ノ瀬さんを追いかける' }],
          },
        },
        {
          key: 'choices',
          value: {
            command: 'choice',
            args: [{ key: 'text', value: '一ノ瀬さんを追いかけない' }],
          },
        },
        {
          key: 'clip',
          value: {
            _startTime: 380.4008904176,
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
  ).toStrictEqual({
    _t: 'ChoiceGroup',
    choices: ['一ノ瀬さんを追いかける', '一ノ瀬さんを追いかけない'],
    duration: 1,
    startTime: 380.4008904176,
  })
})
