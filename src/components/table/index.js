import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RcTable from 'rc-table'
import '../../utilities/vendor/rc-table.css'

export default class Table extends Component {
  static propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array
  }

  static defaultProps = {
    data: [],
    columns: []
  }

  constructor (props) {
    super(props)

    this.state = {
      resizing: null
    }

    this.mouseStartX = null
    const clientWidth = document.body.clientWidth

    const columns = props.columns.reduce((p, c, i, a) => {
      if (i === props.columns.length - 1) {
        return p
      }
      const absoluteWidth = clientWidth / 100 * parseInt(c.width)
      const width = (i === 0 ? absoluteWidth : absoluteWidth + p[i - 1])
      p = [...p, width]
      return p
    }, [])

    this.state.columns = props.columns.map(e => ({...e, width: clientWidth / 100 * parseInt(e.width)}))
    this.state.resizer = columns
  }

  handleResizerMouseDown (i, e) {
    this.setState({resizing: i})
    this.mouseStartX = e.clientX
  }

  handleResizerMouseMove (e) {
    const {resizer, resizing, columns} = this.state
    if (resizing !== null) {
      resizer[resizing] = e.clientX
      columns[resizing].width = this.columns[resizing].width - Math.abs(this.mouseStartX - e.clientX)
      this.setState({resizer, columns})
    }
  }

  handleResizerEnd () {
    this.setState({resizing: null})
  }

  render () {
    const {data} = this.props
    const {columns} = this.state

    return (
      <div
        className="rc-table-container"
        onMouseLeave={this.handleResizerEnd.bind(this)}
        onMouseMove={this.handleResizerMouseMove.bind(this)}
      >
        <RcTable
          key="table"
          rowClassName={(record, index) => (index % 2 ? 'rc-table-odd-row' : '')}
          showHeader={true}
          data={data}
          columns={columns}
        />
        {/* {
         resizer.map((e, i) => (
         <div
         key={i}
         onMouseDown={this.handleResizerMouseDown.bind(this, i)}
         onMouseUp={this.handleResizerEnd.bind(this)}
         className="rc-table-resizer"
         style={{ left: e }}
         />
         ))
         } */}
      </div>
    )
  }
}
