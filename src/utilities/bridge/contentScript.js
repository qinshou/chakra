import { EventEmitter } from 'events'
import { getTabId } from './utils'

class ContentScript extends EventEmitter {
  static send (payload, cb) {
    const message = Object.assign({}, payload, { tabId: getTabId() })
    const responseCallback = response => cb && cb(response)

    chrome.runtime.sendMessage(message, responseCallback)
  }

  listen () {
    const connectInfo = {
      name: 'ChakraContentScript_' + getTabId()
    }

    const port = chrome.runtime.connect(connectInfo)
    this.emit('connect', port)

    port.onMessage.addListener(payload => {
      this.emit('message', payload)
    })

    port.onDisconnect.addListener(() => {
      this.emit('disconnect')
    })
  }
}

export default ContentScript
