import { EventEmitter } from 'events'

export default class Background extends EventEmitter {
  handleConnect (port) {
    if (port.name.indexOf('ChakraContentScript') < 0) {
      return
    }

    const tabId = +port.name.split('_')[1]

    port.onDisconnect.addListener(port => {
      this.emit('disconnect', tabId, port)
    })

    this.emit('connect', tabId, port)
  }

  handleMessage (message, sender, sendResponse) {
    if (sender.id !== chrome.runtime.id) {
      return
    }

    const tabId = message.tabId || null
    delete message.tabId

    this.emit('message', message, tabId, sendResponse)
  }

  listen () {
    chrome.runtime.onConnect.addListener(this.handleConnect.bind(this))
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this))
  }
}
