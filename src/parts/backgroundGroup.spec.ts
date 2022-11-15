import { expect, test } from 'vitest'
import backgroundGroup from './backgroundGroup'

test('title', () => {
  expect(
    backgroundGroup({
      args: [
        {
          key: 'backgrounds',
          value: {
            args: [
              {
                key: 'id',
                value: 'livestage-00-noon',
              },
              {
                key: 'src',
                value: 'env_adv_2d_livestage-00-noon',
              },
            ],
            command: 'background',
          },
        },
        {
          key: 'backgrounds',
          value: {
            args: [
              {
                key: 'id',
                value: 'stagesleeves-00-noon',
              },
              {
                key: 'src',
                value: 'env_adv_2d_stagesleeves-00-noon',
              },
            ],
            command: 'background',
          },
        },
        {
          key: 'backgrounds',
          value: {
            args: [
              {
                key: 'id',
                value: 'cemetery-00-noon',
              },
              {
                key: 'src',
                value: 'env_adv_2d_cemetery-00-noon',
              },
            ],
            command: 'background',
          },
        },
      ],
      command: 'backgroundgroup',
    })
  ).toStrictEqual({
    _t: 'BackgroundGroup',
    backgrounds: {
      'cemetery-00-noon': 'env_adv_2d_cemetery-00-noon',
      'livestage-00-noon': 'env_adv_2d_livestage-00-noon',
      'stagesleeves-00-noon': 'env_adv_2d_stagesleeves-00-noon',
    },
  })
})
