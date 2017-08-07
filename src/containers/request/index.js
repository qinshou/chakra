import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './style.css'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

class Request extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {request} = this.props
    return (
      <div className={styles.wrapper}>
        <Table onRowSelection={e => { }} fixedHeader>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Method</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {
              request.map(e => (
                <TableRow key={e.key}>
                  <TableRowColumn>{e.url}</TableRowColumn>
                  <TableRowColumn>{e.method}</TableRowColumn>
                  <TableRowColumn>{e.statusLine}</TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}

function addRowKey (data) {
  return data.map((e, i) => Object.assign({}, e, { key: i }))
}
const mapStateToProps = (state) => ({
  request: addRowKey(state.request)
})

export default connect(mapStateToProps)(Request)
