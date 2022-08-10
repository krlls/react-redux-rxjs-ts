import { applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

import { actionSanitizer } from './actionsUtils'
import { Action } from '../actions'
import { State } from '../store'

const IS_DEV = process.env.NODE_ENV === 'development'
export const epicMiddleware = createEpicMiddleware<Action, Action, State>({})

const middlewares = applyMiddleware(...[epicMiddleware])

const composeEnhancers = composeWithDevTools({
  actionSanitizer,
})

export const storeMiddlewares = IS_DEV ? composeEnhancers(middlewares) : middlewares
