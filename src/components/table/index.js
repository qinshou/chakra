import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RcTable from 'rc-table'
import { updateDetailVisible, updateDetailData } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../../utilities/vendor/rc-table.css'

class Table extends Component {
  static propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array
  }

  static defaultProps = {
    data: [],
    columns: []
  }

  handleRowClick = (record, index, event) => {
    this.props.updateDetailVisible(true)
    this.props.updateDetailData(record)
  }

  render () {
    const { data, columns } = this.props

    return (
      <div className='rc-table-container'>
        <RcTable
          key='table'
          rowClassName={(record, index) => (index % 2 ? 'rc-table-odd-row' : '')}
          showHeader
          data={data}
          columns={columns}
          onRowClick={this.handleRowClick}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => (state)
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateDetailVisible,
    updateDetailData
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Table)
