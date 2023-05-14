import type { Line, RawCommand } from './types'

import p from './parts'
import parseCommand from './utils/parseCommand'
import cleanUnknown from './utils/cleanUnknown'

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
      case 'choicegroup':
        return p.readChoiceGroup(c)
      case 'branchgroup':
        return p.readBranchGroup(c)
      case 'branch':
        return p.readBranch(c)
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

export function read(text: string, filterUnknown: boolean = false): Line[] {
  const rawCommands = parse(text.replace(/\n\n/g, '\n').trim())
  const ret = rawCommands
    .map(parseRawCommand)
    .filter((x: Line | null): x is NonNullable<Line | null> => x !== null)
  if (!filterUnknown) return ret
  return cleanUnknown(ret)
}

export default read
