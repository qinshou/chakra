import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DialogRC from 'rc-dialog'
import '../../utilities/vendor/rc-dialog.css'

export default class Dialog extends Component {
  static propTypes = {
    title: PropTypes.node,
    onClose: PropTypes.func,
    visible: PropTypes.bool
  }

  static defaultProps = {
    title: '',
    onClose: () => {},
    visible: false
  }

  render () {
    const { children, title, onClose, visible } = this.props
    return (
      <DialogRC title={title} onClose={onClose} visible={visible}>
        {children}
      </DialogRC>
    )
  }
}
