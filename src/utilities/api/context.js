import contentScript from '../bridge/contentScript'

export function dispatchToBridge (action, cb) {
  return new Promise((resolve, reject) => {
    contentScript.send(action, res => {
      if (res.hasError) {
        reject(res.error)
      } else {
        resolve(res.content)
      }
    })
  })
}
