import { Reducer } from 'redux'

import { Action, Actions } from 'actions'

enum Headers {
  ONE = 'Hi React App!',
  TWO = 'Hi Redux',
}

export type THeaderState = Readonly<{
  header: Headers,
}>

const defState = {
  header: Headers.ONE,
}

export const headerState: Reducer<THeaderState, Action> = (
  state = defState,
  action,
): THeaderState => {
  switch (action.type) {
    case Actions.SEND_HI:
      return {
        ...state,
        header: state.header === Headers.ONE ? Headers.TWO : Headers.ONE,
      }
  }
  return state
}
