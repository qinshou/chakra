import React, { Component } from 'react'
import styles from './style.css'

export default class Panel extends Component {
  static propTypes = {}

  static defaultProps = {}

  render () {
    const { children, visible } = this.props
    if (!visible) {
      return null
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    )
  }
}
