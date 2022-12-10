import * as adv from '../dist/index.js'
import { getAllStoriesOcto, putFile, getFile } from './utils.mjs'

// Main routine
;(async () => {
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
    stories.map(({ name, objectName, generation, md5 }) => {
      const savePath = `processed/adv/${name}.json`
      return (async () => {
        if (!forcedRegenerate) {
          const existingFile = await getFile(savePath)
          if (existingFile?.v === version && existingFile?.m === md5) {
            console.log(`Skipped: ${savePath}`)
            return
          }
          if (existingFile === null) {
            console.log(`Creating: ${savePath}`)
          } else {
            console.log(`Updating: ${savePath}`)
          }
        }

        const storyText = await fetch(
          `https://${process.env.UPSTREAM_BASE}/${objectName}?generation=${generation}&alt=media`
        ).then((x) => x.text())
        const parsed = adv.read(storyText).filter((x) => x._t !== 'Unknown')
        await putFile(
          savePath,
          JSON.stringify({ v: version, l: parsed, m: md5 })
        )
        console.log(`Finished: ${savePath}`)
      })().catch((e) => {
        console.warn(`Error: ${savePath} [${e}]`)
        err++
      })
    })
  )
  if (err > 0) {
    console.error('Something is wrong')
    process.exit(err)
  }
})()
