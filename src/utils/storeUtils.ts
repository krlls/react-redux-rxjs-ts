import { composeWithDevTools } from 'redux-devtools-extension'
import { actionSanitizer } from './actionsUtils'
import { createEpicMiddleware } from 'redux-observable'
import { Action } from '../actions'
import { State } from '../store'
import { applyMiddleware } from 'redux'

const composeEnhancers = composeWithDevTools({
  actionSanitizer,
})

export const epicMiddleware = createEpicMiddleware<Action, Action, State>({})
const middlewares = [
  epicMiddleware,
]

export const composeEnhancersToStore = composeEnhancers(
  applyMiddleware(...middlewares),
)
