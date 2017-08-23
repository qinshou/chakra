import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createForm } from 'rc-form'
import Dialog from '../../components/dialog'
import { FormItem } from '../../components/form'
import { updateBreakpointEditVisible } from '../../actions'

const BreakpointDialog = ({ form, visible, data, updateBreakpointEditVisible }) => {
  const { getFieldProps, validateFields, getFieldDecorator } = form

  function submit () {
    validateFields((error, value) => {
      debugger
      console.log(error, value)
    })
  }

  return (
    <div>
      <Dialog title={<div>Edit Breakpoint</div>} visible={visible} onClose={updateBreakpointEditVisible.bind(this, false)}>

        <FormItem label='Method'>
          <input {...getFieldProps('method')} />
        </FormItem>

        <FormItem label='Protocol'>
          <input {...getFieldProps('protocol')} />
        </FormItem>

        <FormItem label='Host'>
          <input {...getFieldProps('host')} />
        </FormItem>

        <FormItem label='Port'>
          <input {...getFieldProps('port')} />
        </FormItem>

        <FormItem label='Path'>
          <input {...getFieldProps('path')} />
        </FormItem>

        <FormItem label='Query'>
          <input {...getFieldProps('query')} />
        </FormItem>

        <button onClick={submit}> Ok </button>
      </Dialog>
    </div>
  )
}

const mapStateToProps = (state) => ({
  visible: state.ui.breakpointEditVisible
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateBreakpointEditVisible
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(createForm()(BreakpointDialog))
