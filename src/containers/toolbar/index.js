import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestClear, toggleRecording, toggleBreakpoint } from '../../actions'

import Toolbar from '../../components/toolbar'
import PushButton from '../../components/pushButton'

const ToolbarContainer = ({ toolbarStatus, onClearRequests, onToggleRecording, onToggleBreakpoint }) => {
  return (
    <Toolbar>

      <PushButton onClick={onToggleRecording}>
        {!toolbarStatus.recording ? 'Start' : 'Stop'} Recording
      </PushButton>

      <PushButton onClick={onToggleBreakpoint}>
        {!toolbarStatus.breakpoint ? 'Enable' : 'Disable'} Breakpoint
      </PushButton>

      <PushButton onClick={onClearRequests}>Clear</PushButton>

    </Toolbar>
  )
}

const mapStateToProps = (state) => ({
  toolbarStatus: state.ui.toolbarStatus
})

const mapDispatchToProps = (dispatch, context) => {
  return bindActionCreators({
    onClearRequests: requestClear,
    onToggleRecording: toggleRecording,
    onToggleBreakpoint: toggleBreakpoint
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarContainer)
