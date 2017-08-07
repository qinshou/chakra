import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'
import { requestClear, toggleRecording } from '../../actions'
import styles from './style.css'

import RaisedButton from 'material-ui/RaisedButton'
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'

const ActionButton = ({ iconClass, tooltip, selected, disabled, onClick }) => {
  const base = {
    width: 38,
    height: 38,
    padding: 5,
    marginRight: 10,
    borderRadius: '50%'
  }

  const selectedStyle = Object.assign({}, base, { backgroundColor: '#eee' })

  return <IconButton onClick={onClick} iconClassName='material-icons' tooltip={tooltip} style={selected ? selectedStyle : base}>{iconClass}</IconButton>
}

const ToolbarContainer = ({ toolbar, onClearRequests, onToggleRecording }) => {
  return (
    <div className={styles.wrapper}>
      <Toolbar>
        <ToolbarGroup>
          <ActionButton onClick={onToggleRecording.bind(this, { recording: !toolbar.recording })} iconClass='fiber_manual_record' tooltip='Start Recording' selected={!toolbar.recording} />
          <ActionButton onClick={onClearRequests} iconClass='block' tooltip='Clear' />
        </ToolbarGroup>
      </Toolbar>
    </div>
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
