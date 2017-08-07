class ContentScript {
  constructor () {
    this.disconnected = false

    this.port = chrome.runtime.connect({
      name: 'ChakraContentScript_' + (chrome.devtools ? chrome.devtools.inspectedWindow.tabId : '')
    })

    this.port.onDisconnect.addListener(() => {
      this.disconnected = true
    })
  }

  listen (cb) {
    this.port.onMessage.addListener(payload => {
      cb(payload)
    })
  }

  send (payload) {
    if (this.disconnected) {
      return
    }

    this.port.postMessage(payload)
  }
}

export default ContentScript
