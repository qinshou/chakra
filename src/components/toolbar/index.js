import React, { Component } from 'react'

export default class Toolbar extends Component {
  static propTypes = {}

  static defaultProps = {}

  render () {
    const {children} = this.props
    return (
      <div>{children}</div>
    )
  }
}
