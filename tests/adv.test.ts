import { readFileSync } from 'node:fs'
import { expect, test } from 'vitest'
import dirname from '../src/utils/dirname'
import { parse, read } from '../src/index'
import path from 'node:path'

const __dirname = dirname(import.meta.url)
const str = readFileSync(path.join(__dirname, './raw/adv.txt'), 'utf-8')
const str2 = readFileSync(
  path.join(__dirname, './raw/adv_with_choice.txt'),
  'utf-8'
)

test('parse the full env', () => {
  expect(parse(str)).toMatchSnapshot()
  expect(parse(str2)).toMatchSnapshot()
})

test('read the full env', () => {
  expect(read(str)).toMatchSnapshot()
  expect(read(str2)).toMatchSnapshot()
})
