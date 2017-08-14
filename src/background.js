import {
  requestAppend,
  TOOLBAR_RECORDING
} from './actions'

import Background from './utilities/bridge/background'
import Request from './utilities/bridge/request'

const ports = {}
const background = new Background()

background.on('connect', (tabId, port) => {
  if (ports[tabId]) {
    return
  }

  ports[tabId] = {
    request: new Request(tabId),
    listener: requestListener(port)
  }
})

background.on('disconnect', tabId => {
  if (!ports[tabId]) {
    return
  }

  ports[tabId].request.removeRequestListener(ports[tabId].listener)
  delete ports[tabId]
})

background.on('message', (action, tabId, reply) => {
  switch (action.type) {
    case TOOLBAR_RECORDING: {
      const {recording} = action.payload
      const port = ports[tabId]

      if (!port) {
        return
      }

      handleRecording({recording, port, reply})
      break
    }

    default:
      break
  }
})

background.listen()

function handleRecording ({recording, port, reply}) {
  const {request, listener} = port
  if (recording) {
    request.addRequestListener(listener)
  } else {
    request.removeRequestListener(listener)
  }

  reply(replyHandler({response: 'ok'}))
}

function requestListener (port) {
  return function (details) {
    port.postMessage(requestAppend(details))
  }
}

function replyHandler ({hasError = false, response}) {
  const ret = {hasError}
  if (!hasError) {
    ret.content = response
  } else {
    ret.error = response
  }

  return ret
}
