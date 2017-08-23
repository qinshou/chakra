import Background from './utilities/bridge/background'
import Request from './utilities/bridge/request'
import Reducer, { requestListener } from './utilities/background'
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
  const port = ports[tabId]

  if (!port) {
    return
  }
  const reducer = new Reducer({ action, reply, port })
  reducer.reducer()
})

background.listen()
