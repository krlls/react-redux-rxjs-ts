import { Reducer } from 'redux'

import { Action, Actions } from 'actions'

enum Headers {
  ONE = 'Hi React App!',
  TWO = 'Hi Redux',
}

export type TContentState = Readonly<{
  header: Headers,
  data: string,
}>

const defState = {
  header: Headers.ONE,
  data: '',
}

export const contentState: Reducer<TContentState, Action> = (
  state = defState,
  action,
): TContentState => {
  switch (action.type) {
    case Actions.SEND_HI:
      return {
        ...state,
        header: state.header === Headers.ONE ? Headers.TWO : Headers.ONE,
      }
    case Actions.GET_README_SUCCESS:
      return {
        ...state,
        data: action.data,
      }
  }
  return state
}
