import path from 'node:path'

export default function dirname(url: string): string {
  return path.dirname(new URL(url).pathname)
}
