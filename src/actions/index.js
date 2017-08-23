import api from '../utilities/api'
export const REQUEST_CLEAR = 'REQUEST_CLEAR'

export const DETAIL_DATA = 'DETAIL_DATA'
export const BREAKPOINT_DIALOG_TOGGLE = 'BREAKPOINT_DIALOG_TOGGLE'

export const UI_TOOLBAR_STATUS_UPDATE = 'UI_TOOLBAR_STATUS_UPDATE'
export const UI_TOOLBAR_CONNECTION = 'UI_TOOLBAR_CONNECTION'
export const UI_TOOLBAR_RECORDING = 'UI_TOOLBAR_RECORDING'
export const UI_DETAIL_VISIBLE = 'UI_DETAIL_VISIBLE'
export const UI_BREAKPOINT_EDIT_VISIBLE = 'UI_BREAKPOINT_EDIT_VISIBLE'

export function updateToolbarStatus (status) {
  return {
    type: UI_TOOLBAR_STATUS_UPDATE,
    payload: status
  }
}

export function updateDetailVisible (isVisible) {
  return {
    type: UI_DETAIL_VISIBLE,
    payload: isVisible
  }
}

export function updateDetailData (data) {
  return {
    type: DETAIL_DATA,
    payload: data
  }
}

export function updateBreakpointEditVisible (isVisible) {
  return {
    type: UI_BREAKPOINT_EDIT_VISIBLE,
    payload: isVisible
  }
}

export function requestClear () {
  return {
    type: REQUEST_CLEAR
  }
}

export function toggleRecording () {
  return (dispatch, getState) => {
    api.updateRecording({
      recording: !getState().ui.toolbarStatus.recording
    }).then(res => {
      dispatch(updateToolbarStatus({
        recording: res.recording
      }))
    })
  }
}

export function toggleBreakpoint () {
  return (dispatch, getState) => {
    api.updateBreakpoint({
      breakpoint: !getState().ui.toolbarStatus.breakpoint
    }).then(res => {
      dispatch(updateToolbarStatus({
        breakpoint: res.breakpoint
      }))
    })
  }
}
