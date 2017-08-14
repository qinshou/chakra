import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestClear, toggleRecording } from '../../actions'

import Toolbar from '../../components/toolbar'
import PushButton from '../../components/pushButton'

const ToolbarContainer = ({toolbar, onClearRequests, onToggleRecording}) => {
  return (
    <Toolbar>

      <PushButton
        onClick={onToggleRecording.bind(this, {recording: !toolbar.recording})}>{!toolbar.recording && 'Start'}
        Recording</PushButton>
      <PushButton onClick={onClearRequests}>Clear</PushButton>

    </Toolbar>
  )
}

const mapStateToProps = (state) => ({
  toolbar: state.toolbar
})

const mapDispatchToProps = (dispatch, context) => {
  return bindActionCreators({
    onClearRequests: requestClear,
    onToggleRecording: toggleRecording
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarContainer)
