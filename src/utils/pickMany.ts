import type { ArgValueType, RawCommand } from '../types'

export default function pickMany(
  c: RawCommand,
  key: string,
  assertType: 'number' | 'object' | 'string'
): ArgValueType[] {
  const v = c.args.filter((x) => x.key === key).map((x) => x.value)
  for (const i of v) {
    if (typeof i !== assertType) {
      throw Error(`Invalid type on key "${key}"`)
    }
  }
  return v
}
