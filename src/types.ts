export type CommandName =
  | 'ActorGroup'
  | 'BackgroundGroup'
  | 'BackgroundSetting'
  | 'Bgm'
  | 'Message'
  | 'Se'
  | 'Voice'
  | 'Title'
  | 'Narration'
  | 'BranchGroup'
  | 'ChoiceGroup'
  | 'Branch'
  | 'Unknown'

export type NonCommandName = never

export type ComponentName = CommandName | NonCommandName

export interface LineBase {
  _t: ComponentName
}

export type Line = LineBase &
  // Also update `type CommandName`!
  (| ActorGroup
    | BackgroundGroup
    | BackgroundSetting
    | Bgm
    | Message
    | Se
    | Voice
    | Title
    | Narration
    | Unknown
    | BranchGroup
    | ChoiceGroup
    | Branch
  )

type Xy = {
  x: number
  y: number
}

type Xyz = Xy & {
  z: number
}

type MediaCommon = { startTime: number; duration: number }

// ------

export type BackgroundGroup = {
  _t: 'BackgroundGroup'
  backgrounds: Record<string, string>
}

export type BackgroundSetting = {
  _t: 'BackgroundSetting'
  id: string
  position?: Xy
  scale?: Xy
  startTime: number
}

export type ActorGroup = {
  _t: 'ActorGroup'
  actors: Actor[]
}

export type Actor = {
  _t: 'Actor'
  id: string
  body: string
  face: string
  hair: string
}

export type Title = {
  _t: 'Title'
  title: string
}

export type Bgm = MediaCommon & {
  _t: 'Bgm'
  bgm: string
}

export type Message = {
  _t: 'Message'
  text: string
  name: string
  startTime: number
  thumbnail?: string
}

export type Voice = MediaCommon & {
  _t: 'Voice'
  voice: string
  channel?: number
  actorId?: string
}

export type Se = MediaCommon & {
  _t: 'Se'
  se: string
}

export type Narration = {
  _t: 'Narration'
  text: string
  startTime: number
}

export type BranchGroup = {
  _t: 'BranchGroup'
  type: string
  groupLength: number
}

export type ChoiceGroup = MediaCommon & {
  _t: 'ChoiceGroup'
  choices: string[]
}

export type Branch = {
  _t: 'Branch'
  groupLength: number
}

export type Unknown = {
  _t: 'Unknown'
  raw: string
}

// ------

export type ArgValueTypeMap = {
  string: string
  number: number
  object: Record<string, any>
  command: RawCommand
}

export type ArgValueType = ArgValueTypeMap[keyof ArgValueTypeMap]

export type Arg = {
  key: string
  value: ArgValueType
}

export type RawCommand = {
  command: string
  args: Arg[]
}
