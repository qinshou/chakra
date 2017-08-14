import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './style.css'

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
  }

  static defaultProps = {}

  handleMouseUp = (e) => {
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e)
    }
  }

  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render () {
    const {children, type, className} = this.props
    const classes = cx(styles.pushButton, className, {
      ['type-' + type]: type
    })

    return (
      <button
        className={classes}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
      >{children}</button>
    )
  }
}
