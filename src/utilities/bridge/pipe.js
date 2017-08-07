/**
 * connectContentScript -> listenBackground
 */

class Pipe {
  static getTabId () {
    return chrome.devtools ? chrome.devtools.inspectedWindow.tabId : ''
  }

  static connectContentScript (onConnect, onDisconnect) {
    chrome.runtime.onConnect.addListener(port => {
      if (port.name.indexOf('ChakraContentScript') < 0) {
        return
      }

      let disconnected = false
      const tabId = +port.name.split('_')[1]

      port.onDisconnect.addListener(port => {
        disconnected = true
        onDisconnect(tabId, port)
      })

      !disconnected && onConnect(tabId, port)
    })
  }

  static listenBackground (onMessage, onDisconnect) {
    const port = chrome.runtime.connect({
      name: 'ChakraContentScript_' + Pipe.getTabId()
    })

    port.onDisconnect.addListener(() => {
      onDisconnect()
    })

    port.onMessage.addListener(payload => {
      onMessage(payload)
    })
  }

  static addMessageListener (cb) {
    cb = cb || function () { }
    chrome.runtime.onMessage.addListener((req, sender, reply) => {
      if (sender.id !== chrome.runtime.id) {
        return
      }

      cb(req, reply)
    })
  }

  static sendMessage (payload, cb) {
    cb = cb || function () { }
    chrome.runtime.sendMessage(Object.assign({}, payload, {tabId: Pipe.getTabId()}), function (response) {
      cb(response)
    })
  }
}

export default Pipe
