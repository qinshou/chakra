export default {
  listen (cb) {
    chrome.runtime.onMessage.addListener((req, sender, reply) => {
      cb(req, reply)
    })
  },

  send (payload, cb) {
    cb = cb || function () {}
    chrome.runtime.sendMessage({ type: 'CHAKRA_MESSAGE', payload }, function (res) {
      cb(res)
    })
  }
}
