import { expect, test } from 'vitest'
import title from './title'

test('title', () => {
  expect(
    title({
      command: 'title',
      args: [
        {
          key: 'title',
          value: '運命繋ぐ流星の軌跡 5話 星の海の記憶',
        },
      ],
    })
  ).toStrictEqual({
    _t: 'Title',
    title: '運命繋ぐ流星の軌跡 5話 星の海の記憶',
  })
})

test('title is nullable', () => {
  expect(
    title({
      command: 'title',
      args: [],
    })
  ).toStrictEqual(null)
})
