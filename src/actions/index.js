import contentScript from '../utilities/bridge/contentScript'

export const REQUEST_APPEND = 'REQUEST_APPEND'
export const REQUEST_CLEAR = 'REQUEST_CLEAR'

export const TOOLBAR_CONNECTION = 'TOOLBAR_CONNECTION'
export const TOOLBAR_RECORDING = 'TOOLBAR_RECORDING'

export function updateConnectionState ({connection}) {
  return {
    type: TOOLBAR_CONNECTION,
    payload: {connection}
  }
}

export function updateRecordingState ({recording}) {
  return {
    type: TOOLBAR_RECORDING,
    payload: {recording}
  }
}

export function toggleRecording () {
  return (dispatch, getState) => {
    const {toolbar} = getState()
    const payload = {recording: !toolbar.recording}
    dispatchToBridge(updateRecordingState(payload))
    dispatch(updateRecordingState(payload))
  }
}

export function requestAppend (details) {
  return {
    type: REQUEST_APPEND,
    payload: details
  }
}

export function requestClear () {
  return {
    type: REQUEST_CLEAR
  }
}

export function dispatchToBridge (action) {
  contentScript.send(action, res => {
    //
  })
}
