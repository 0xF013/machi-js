import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './ducks'
import Game from './components/Game'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch({
  type: 'INIT',
  payload: {
    playerCount: 4
  }
})

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    )
  }
}

export default App
