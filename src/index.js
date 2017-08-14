import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import './utilities/vendor/global.css'
import ContentScript from './utilities/bridge/contentScript'

import { updateConnectionState } from './actions'
import RootReducer from './reducers'
import RootContainer from './containers/root'

const store = createStore(
  RootReducer,
  applyMiddleware(thunk)
)

const contentScript = new ContentScript()

contentScript.on('connect', () => {
  // debugger
})

contentScript.on('disconnect', () => {
  store.dispatch(updateConnectionState({connection: false}))
})

contentScript.on('message', action => {
  store.dispatch(action)
})

contentScript.listen()

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root')
)
