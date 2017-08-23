export const UPDATE_RECORDING_STATE = 'UPDATE_RECORDING_STATE'
export const UPDATE_BREAKPOINT_STATE = 'UPDATE_BREAKPOINT_STATE'
export const APPEND_REQUEST = 'REQUEST_APPEND'
export const APPEND_BREAKPOINT = 'APPEND_BREAKPOINT'

export function updateRecordingState (isRecording) {
  return {
    type: UPDATE_RECORDING_STATE,
    payload: isRecording
  }
}

export function appendRequest (details) {
  return {
    type: APPEND_REQUEST,
    payload: details
  }
}

export function updateBreakpointState (isBreaking) {
  return {
    type: UPDATE_BREAKPOINT_STATE,
    payload: isBreaking
  }
}
