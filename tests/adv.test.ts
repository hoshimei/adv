import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'
import dirname from '../src/utils/dirname'
import { parse } from '../src/index'
import path from 'node:path'

const __dirname = dirname(import.meta.url)

test('parse the full env', () => {
  const str = readFileSync(path.join(__dirname, './raw/adv.txt'), 'utf-8')
  expect(parse(str)).toMatchSnapshot()
})
