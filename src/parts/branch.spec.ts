import { expect, test } from 'vitest'
import branch from './branch'

test('branch', () => {
  expect(
    branch({
      args: [
        {
          key: 'groupLength',
          value: 67,
        },
      ],
      command: 'branch',
    })
  ).toStrictEqual({
    _t: 'Branch',
    groupLength: 67,
  })
})
