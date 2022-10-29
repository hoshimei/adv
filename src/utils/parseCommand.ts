import type { Arg, RawCommand } from '../types'
import findRegion from './findRegion'

export default function parseCommand(t: string): RawCommand {
  if (t[0] !== '[' || t[t.length - 1] !== ']') {
    throw Error('Invalid line')
  }
  const commandSplit = t.indexOf(' ')
  const command = t.slice(1, commandSplit)
  if (commandSplit === -1) {
    // No args
    return {
      command,
      args: [],
    }
  }
  const argsStr = t.slice(commandSplit + 1, -1)
  const matchItems = [...argsStr.matchAll(/(?<key>[a-z]+)=/g)]
  const args: Arg[] = []

  let cruisePos = 0
  for (let i = 0; i < matchItems.length; i++) {
    const item = matchItems[i]
    const indexAt = item.index as number
    if (indexAt < cruisePos) continue
    const key = item.groups?.key as string
    const wholeComponent = argsStr.slice(
      indexAt,
      i === matchItems.length - 1
        ? argsStr.length
        : (matchItems[i + 1].index as number) - 1
    )
    const value = wholeComponent.slice(key.length + 1)
    if (value[0] === '[') {
      // nested command
      const regionEndsAt = findRegion(
        '[',
        ']',
        argsStr,
        indexAt + key.length + 1
      )
      const internalRegion = argsStr.slice(
        indexAt + key.length + 1,
        regionEndsAt + 1
      )
      args.push({
        key,
        value: parseCommand(internalRegion),
      })
      cruisePos = regionEndsAt + 1
    } else if (value[0] === '\\' && value[1] === '{') {
      // object
      const regionEndsAt = findRegion(
        '{',
        '}',
        argsStr,
        indexAt + key.length + 2
      )
      const internalRegion = argsStr
        .slice(indexAt + key.length + 1, regionEndsAt + 1)
        .replace(/\\{/g, '{')
        .replace(/\\}/g, '}')
      const obj = JSON.parse(internalRegion)
      args.push({
        key,
        value: obj,
      })
      cruisePos = regionEndsAt + 1
    } else {
      // do it normally
      if (!Number.isNaN(Number(value))) {
        args.push({
          key,
          value: Number(value),
        })
      } else {
        args.push({
          key,
          value,
        })
      }
    }
  }
  return {
    command,
    args,
  }
}
