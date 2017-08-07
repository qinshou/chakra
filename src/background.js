import {
  updateConnectionState,
  requestAppend,
  TOOLBAR_RECORDING
} from './actions'

import bridge from './utilities/bridge/pipe'
import Request from './utilities/bridge/request'

const ports = {}

bridge.connectContentScript((tabId, port) => {
  // I don't know why should ignore this
  if (ports[tabId]) {
    return
  }
  // Send login action
  port.postMessage(updateConnectionState({ connection: true }))

  const request = new Request(tabId)
  const listener = sendingRequestDetails(port)

  ports[tabId] = { request, listener }
  request.addRequestCompletedListener(listener)
}, (tabId) => {
  if (!ports[tabId]) {
    return
  }

  ports[tabId].request.removeEventListener(ports[tabId].listener)
  delete ports[tabId]
})

// Listening action message
bridge.addMessageListener(messageReducer)

function messageReducer (action, reply) {
  switch (action.type) {
    case TOOLBAR_RECORDING: {
      const { recording } = action.payload
      const port = ports[action.tabId]

      if (!port) {
        return
      }

      if (recording) {
        port.request.addRequestCompletedListener(port.listener)
      } else {
        port.request.removeEventListener(port.listener)
      }

      reply(responseHandler({ response: 'ok' }))
      break
    }

    default:
      break
  }
}

function sendingRequestDetails (port) {
  return function (details) {
    port.postMessage(requestAppend(details))
  }
}

function responseHandler ({ hasError = false, response }) {
  const ret = { hasError }
  if (!hasError) {
    ret.content = response
  } else {
    ret.error = response
  }

  return ret
}
