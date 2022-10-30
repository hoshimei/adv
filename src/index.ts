import type { Line, RawCommand } from './types'

import p from './parts'
import parseCommand from './utils/parseCommand'

export function parse(text: string): RawCommand[] {
  const lines = text.split('\n')
  return lines.map(parseCommand)
}

export function parseRawCommand(c: RawCommand): Line {
  switch (c.command) {
    case 'backgroundgroup':
      return p.readBackgroundGroup(c)
    case 'backgroundsetting':
      return p.readBackgroundSetting(c)
    case 'bgm':
      return p.readBgm(c)
    case 'title':
      return p.readTitle(c)
    case 'message':
      return p.readMessage(c)
    default:
      return {
        _t: 'Unknown',
        raw: JSON.stringify(c),
      }
  }
}

function read(text: string): Line[] {
  const rawCommands = parse(text)
  return rawCommands.map(parseRawCommand)
}

export default read
