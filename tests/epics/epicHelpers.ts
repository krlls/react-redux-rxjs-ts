import { createEpicMiddleware } from 'redux-observable'
import { Action } from '../../src/actions'
import { State } from '../../src/store'

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
}

export const createMiddleware = () => {
  return createEpicMiddleware<Action, Action, State>({})
}
