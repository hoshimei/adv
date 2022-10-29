export type CommandName =
  | 'BackgroundGroup'
  | 'ActorGroup'
  | 'Title'
  | 'Bgm'
  | 'Message'
  | 'Unknown'

export type NonCommandName = never

export type ComponentName = CommandName | NonCommandName

export interface LineBase {
  _t: ComponentName
}

export type Line = LineBase &
  (BackgroundGroup | ActorGroup | Title | Bgm | Message | Unknown)

export type BackgroundGroup = {
  _t: 'BackgroundGroup'
  backgrounds: string[]
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

export type Bgm = {
  _t: 'Bgm'
  bgm: string
}

export type Message = {
  _t: 'Message'
  text: string
  name: string
  thumbnail: string
}

export type Unknown = {
  _t: 'Unknown'
  raw: string
}

// ------

export type ArgValueType = string | number | Record<string, any> | RawCommand

export type Arg = {
  key: string
  value: ArgValueType
}

export type RawCommand = {
  command: string
  args: Arg[]
}
