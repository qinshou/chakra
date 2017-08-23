import React from 'react'
import { connect } from 'react-redux'
import Toolbar from '../toolbar'
import Request from '../request'
import Detail from '../detail'
import BreakpointDialog from '../breakpointDialog'

const App = () => {
  return (
    <div>
      <Toolbar />
      <Request />
      <Detail />
      <BreakpointDialog />
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(App)
