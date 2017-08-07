class Background {
  constructor () {
    this.tabId = null
    this.port = null
    this.disconnected = false
  }

  onConnect (cb) {
    cb = cb || function () { }
    chrome.runtime.onConnect.addListener(port => {
      this.port = port
      this.tabId = +port.name.split('_')[1]

      this.port.onDisconnect.addListener(port => {
        this.disconnected = true
        this.port.onMessage.removeListener(cb)
      })
      cb(this)
    })
  }

  send (payload) {
    if (this.disconnected) {
      return
    }
    this.port.postMessage(payload)
  }
}

export default Background
