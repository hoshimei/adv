import { expect, test } from 'vitest'
import { inspect } from './pick'

test('pick.inspect', () => {
  expect(
    inspect(
      {
        a: {
          b: {
            c: {
              d: 1,
            },
          },
        },
      },
      'a.b.c.d'
    )
  ).toEqual(1)
})
