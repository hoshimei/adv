import type { ArgValueType, ArgValueTypeMap, RawCommand } from '../types'

function checkType(
  value: ArgValueType,
  assertType: keyof ArgValueTypeMap
): boolean {
  return assertType === 'command'
    ? typeof value === 'object'
    : typeof value === assertType
}

export function pickFirst<T extends keyof ArgValueTypeMap>(
  c: RawCommand,
  key: string,
  assertType: T
): ArgValueTypeMap[T] {
  const v = c.args.filter((x) => x.key === key)[0].value
  if (!checkType(v, assertType)) {
    throw Error(`Invalid type on key "${key}"`)
  }
  return v as ArgValueTypeMap[T]
}

export function pickMany<T extends keyof ArgValueTypeMap>(
  c: RawCommand,
  key: string,
  assertType: T
): ArgValueTypeMap[T][] {
  const v = c.args.filter((x) => x.key === key).map((x) => x.value)
  for (const i of v) {
    if (!checkType(i, assertType)) {
      throw Error(`Invalid type on key "${key}"`)
    }
  }
  return v as ArgValueTypeMap[T][]
}
