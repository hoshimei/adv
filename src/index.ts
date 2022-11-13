import type { Line, RawCommand } from './types'

import p from './parts'
import parseCommand from './utils/parseCommand'

export function parse(text: string): RawCommand[] {
  const lines = text.split('\n')
  return lines.map(parseCommand)
}

export function parseRawCommand(c: RawCommand): Line | null {
  try {
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
      case 'se':
        return p.readSe(c)
      case 'voice':
        return p.readVoice(c)
      case 'narration':
        return p.readNarration(c)
      default:
        return {
          _t: 'Unknown',
          raw: JSON.stringify(c),
        }
    }
  } catch (e) {
    console.error(`Error when parsing ${JSON.stringify(c)}: ${String(e)}`)
    throw e
  }
}

export function read(text: string): Line[] {
  const rawCommands = parse(text.replace(/\n\n/g, '\n').trim())
  return rawCommands
    .map(parseRawCommand)
    .filter((x: Line | null): x is NonNullable<Line | null> => x !== null)
}

export default read
