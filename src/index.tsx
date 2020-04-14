import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'

import { rootReducer } from './store'
import { App } from './App'

const store = createStore(rootReducer, devToolsEnhancer({}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
