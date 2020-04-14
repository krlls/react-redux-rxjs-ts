import { combineEpics, Epic } from 'redux-observable'
import { filter, mapTo, delay, tap } from 'rxjs/operators'

import { actionEmpty, Action, Actions } from 'actions'
import { State } from 'store'

const testEpic: EpicFunc = action$ => action$.pipe(
  filter(action => action.type === Actions.SEND_HI),
  tap(() => console.log('Epic delay 1000 start')),
  delay(1000),
  tap(() => console.log('Epic delay 1000 finish')),
  mapTo(actionEmpty(Actions.TEST_EPIC)),
)

const epics = [
  testEpic,
]

export type EpicFunc = Epic<Action, Action, State>
export const rootEpic = combineEpics<Action, Action, State>(...epics)
