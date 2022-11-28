import { S3 } from '@aws-sdk/client-s3'

const bucketName = process.env.ASSETS_BUCKET_NAME
const s3 = new S3({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
})

export function updateCommuX(title, lines) {
  return fetch('https://idoly-backend.outv.im/manage/writeCommu', {
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_MANAGE_WRITE_KEY}`,
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({ title, lines }),
  }).then((x) => x.text())
}

export function getAllStoriesOcto() {
  return fetch('https://idoly-backend.outv.im/manage/raw?key=Octo', {
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_MANAGE_READ_KEY}`,
    },
  })
    .then((x) => x.json())
    .then((x) => x.resourceList.filter((y) => y.name.endsWith('txt')))
}

export function putFile(savePath, body) {
  return s3.putObject({
    Bucket: bucketName,
    Key: savePath,
    Body: body,
    ContentType: 'application/json;charset=utf-8',
  })
}

export function getFile(savePath) {
  return s3
    .getObject({
      Bucket: bucketName,
      Key: savePath,
    })
    .then((x) => x.Body.transformToString())
    .then(JSON.parse)
    .catch((e) => null)
}
