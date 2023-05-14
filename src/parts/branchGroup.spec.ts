import { expect, test } from 'vitest'
import branchGroup from './branchGroup'

test('branchGroup', () => {
  expect(
    branchGroup({
      args: [
        {
          key: 'type',
          value: 'Choice',
        },
        {
          key: 'groupLength',
          value: 2,
        },
      ],
      command: 'branchgroup',
    })
  ).toStrictEqual({
    _t: 'BranchGroup',
    type: 'Choice',
    groupLength: 2,
  })

  expect(
    branchGroup({
      args: [
        {
          key: 'type',
          value: 'Condition',
        },
        {
          key: 'groupLength',
          value: 3,
        },
      ],
      command: 'branchgroup',
    })
  ).toStrictEqual({
    _t: 'BranchGroup',
    type: 'Condition',
    groupLength: 3,
  })
})
