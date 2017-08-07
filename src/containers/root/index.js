import React from 'react'
import { connect } from 'react-redux'
import Toolbar from '../toolbar'
import Request from '../request'

const App = ({ request }) => {
  return (
    <div>
      <Toolbar />
      <Request />
    </div>
  )
}

const mapStateToProps = (state) => ({
  request: state.request
})

export default connect(mapStateToProps)(App)
