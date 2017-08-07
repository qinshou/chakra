import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import './utilities/vendor/global.css'
import bridge from './utilities/bridge/pipe'

import { updateConnectionState } from './actions'
import RootReducer from './reducers'
import RootContainer from './containers/root'

const muiTheme = getMuiTheme({
  toolbar: {
    height: 44
  }
})

const store = createStore(
  RootReducer,
  applyMiddleware(thunk)
)

bridge.listenBackground(
  action => store.dispatch(action),
  () => store.dispatch(updateConnectionState({ connection: false }))
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <RootContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
