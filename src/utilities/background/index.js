import {
  appendRequest,
  UPDATE_RECORDING_STATE,
  UPDATE_BREAKPOINT_STATE
} from '../../actions/bridge'

export default class BackgroundReducer {
  constructor ({ action, reply, port }) {
    this.port = port
    this.replyRef = reply
    this.action = action
  }

  reducer () {
    switch (this.action.type) {
      case UPDATE_RECORDING_STATE:
        return this.handleRecording()
      case UPDATE_BREAKPOINT_STATE:
        return this.handleBreakpoint()
      default:
        break
    }
  }

  handleRecording () {
    const { request, listener } = this.port
    const recording = this.action.payload

    if (recording) {
      request.addResponseListener(listener)
    } else {
      request.removeResponseListener(listener)
    }

    this.reply({
      payload: { recording }
    })
  }

  handleBreakpoint () {
    const { request, listener } = this.port
    const breakpoint = this.action.payload

    // if (breakpoint) {
    //   request.addBreakpointListener(listener)
    // } else {
    //   request.removeBreakpointListener(listener)
    // }

    this.reply({
      payload: { breakpoint }
    })
  }

  reply ({ hasError = false, payload }) {
    const ret = { hasError }
    if (!hasError) {
      ret.content = payload
    } else {
      ret.error = payload
    }

    this.replyRef(ret)
  }
}

export function requestListener (port) {
  return function (details) {
    port.postMessage(appendRequest(details))
  }
}
