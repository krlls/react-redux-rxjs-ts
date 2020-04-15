import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { createEpicMiddleware } from 'redux-observable'

import { rootReducer, State } from 'store'
import { rootEpic } from 'epics'
import { Action, actionEmpty, Actions } from 'actions'
import { App } from './App'

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
})

const epicMiddleware = createEpicMiddleware<Action, Action, State>({})
const middlewares = [
  epicMiddleware,
]

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middlewares),
))

epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

store.dispatch(actionEmpty(Actions.GET_README))
