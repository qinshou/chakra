import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Panel from '../../components/panel'
import { updateDetailVisible, updateBreakpointEditVisible } from '../../actions'

const Detail = ({ visible, data, updateDetailVisible, updateBreakpointEditVisible }) => (
  <div>
    <Panel visible={visible}>
      <button onClick={updateDetailVisible.bind(this, false)}> Close </button>
      <button onClick={updateBreakpointEditVisible.bind(this, true)}> Add Breakpoint </button>
      <div>
        {
          Object.keys(data).map((e, i) => (
            <li key={i}>{e} - {data[e]}</li>
          ))
        }
      </div>
    </Panel>
  </div>
)

const mapStateToProps = (state) => ({
  visible: state.ui.detailVisible,
  data: state.detail
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateDetailVisible,
    updateBreakpointEditVisible
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
