import * as adv from '../dist/index.js'
import { getAllStoriesOcto, putFile, getFile, writeCommu } from './utils.mjs'

const ADV_METAFILE_PATH = 'processed/adv/meta.json'

// Main routine
;(async () => {
  const metadataTable = (await getFile(ADV_METAFILE_PATH)) ?? {}
  console.log(
    `Requesting full observation for octo v${process.env.OCTO_REVISION}`
  )
  const forcedRegenerate = process.env.FORCED === 'true'
  const version = (
    await import('../package.json', { assert: { type: 'json' } })
  ).default.version
  const stories = await getAllStoriesOcto()
  let err = 0
  if (forcedRegenerate) {
    console.log('Forced re-generating all advs.')
  }
  await Promise.all(
    stories.map(({ name, objectName, generation, md5, uploadVersionId }) => {
      const savePath = `processed/adv/${name}.json`
      return (async () => {
        if (!forcedRegenerate) {
          const [advScriptVersion, sourceMd5] = metadataTable[name] ?? []
          if (advScriptVersion === version && sourceMd5 === md5) {
            console.log(`Skipped: ${savePath}`)
            return
          }
          if (advScriptVersion === undefined) {
            console.log(`Creating: ${savePath}`)
          } else {
            console.log(`Updating: ${savePath}`)
          }
        }

        const storyText = await fetch(
          `https://${process.env.UPSTREAM_BASE_DOMAIN}/solis-${uploadVersionId}-resources/${objectName}?generation=${generation}&alt=media`
        ).then((x) => x.text())
        const parsed = adv.read(storyText, true)
        await Promise.all([
          putFile(savePath, JSON.stringify({ v: version, l: parsed, m: md5 })),
          writeCommu(
            name.replace(/^adv_/, '').replace(/\.txt$/, ''),
            parsed.find((x) => x._t === 'Title')?.title ?? 'Untitled',
            parsed
              .filter((x) => x._t === 'Message')
              .map(({ text, name }) => ({
                text: text.replaceAll('{user}', 'マネジャー'),
                name,
              }))
          ),
        ])
        metadataTable[name] = [version, md5]
        console.log(`Finished: ${savePath}`)
      })().catch((e) => {
        console.warn(`Error: ${savePath} [${e}]`)
        err++
      })
    })
  )
  await putFile(ADV_METAFILE_PATH, JSON.stringify(metadataTable))
  if (err > 0) {
    console.error(`Something is wrong - ${err} operations failed.`)
    process.exit(1)
  }
})()
