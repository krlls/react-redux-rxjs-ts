import { combineReducers } from 'redux'

import { headerState, THeaderState } from './header'

import { Action } from '../actions'

export type State = Readonly<{
  headerState: THeaderState,
}>

export const rootReducer = combineReducers<State, Action>({
  headerState,
})
