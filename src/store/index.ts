import { combineReducers } from 'redux'

import { contentState, TContentState } from './header'

import { Action } from '../actions'

export type State = Readonly<{
  content: TContentState,
}>

export const rootReducer = combineReducers<State, Action>({
  content: contentState,
})
