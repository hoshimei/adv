import * as adv from '../dist/index.js'
import { getAllStoriesOcto, putFile, getFile } from './utils.mjs'

// Main routine
;(async () => {
  const version = (
    await import('../package.json', { assert: { type: 'json' } })
  ).default.version
  const stories = await getAllStoriesOcto()
  await Promise.all(
    stories.map(({ name, objectName, generation }) => {
      const savePath = `processed/adv/${name}.json`
      return (async () => {
        const existingFile = await getFile(savePath)
        if (existingFile?.v === version) {
          console.log(`Skipped: ${savePath}`)
          return
        }
        const storyText = await fetch(
          `https://${process.env.UPSTREAM_BASE}/${objectName}?generation=${generation}&alt=media`
        ).then((x) => x.text())
        const parsed = adv.read(storyText)
        await putFile(savePath, JSON.stringify({ v: version, l: parsed }))
      })()
        .then(() => console.log(`Finished: ${savePath}`))
        .catch((e) => {
          console.warn(`Error: ${savePath} [${e}]`)
        })
    })
  )
})()
