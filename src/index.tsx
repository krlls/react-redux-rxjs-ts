import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { rootReducer } from 'store'
import { rootEpic } from 'epics'
import { composeEnhancersToStore, epicMiddleware } from './utils/storeUtils'
import { actionEmpty, Actions } from 'actions'
import { App } from './App'

const store = createStore(rootReducer, composeEnhancersToStore)

epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

store.dispatch(actionEmpty(Actions.GET_README))
