import { combineEpics, Epic, ofType } from 'redux-observable'
import { mapTo, delay, tap, mergeMap, map, filter } from 'rxjs/operators'
import Axios from  'axios-observable'

import { action, actionEmpty, Action, Actions } from 'actions'
import { State } from 'store'

const testEpic: EpicFunc = action$ => action$.pipe(
  ofType(Actions.SEND_HI),
  tap(() => console.log('Epic delay 1000 start')),
  delay(1000),
  tap(() => console.log('Epic delay 1000 finish')),
  mapTo(actionEmpty(Actions.TEST_EPIC)),
)

const getReadmeEpic: EpicFunc = (action$, state) => action$.pipe(
  ofType(Actions.GET_README),
  filter(() => !state.value.content.data.length),
  mergeMap(
    () => Axios.get('https://raw.githubusercontent.com/krlls/My-build-React/master/README.md')
      .pipe(
        map(({ data }) => action(Actions.GET_README_SUCCESS, data)),
      ),
  ),
)

const epics = [
  testEpic,
  getReadmeEpic,
]

export type EpicFunc = Epic<Action, Action, State>
export const rootEpic = combineEpics<Action, Action, State>(...epics)
