import type { ArgValueType, RawCommand } from '../types'

export default function pickFirst(
  c: RawCommand,
  key: string,
  assertType: 'number' | 'object' | 'string'
): ArgValueType {
  const v = c.args.filter((x) => x.key === key)[0].value
  if (typeof v !== assertType) {
    throw Error(`Invalid type on key "${key}"`)
  }
  return v
}
