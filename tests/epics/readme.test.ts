import configureMockStore, { MockStore } from 'redux-mock-store'
import Axios from 'axios-observable'
import { of } from 'rxjs'

import { getReadmeEpic } from '../../src/epics'
import { contentState, defState } from '../../src/store/header'
import { Actions, actionEmpty, action } from '../../src/actions'
import { createMiddleware, DeepPartial } from './epicHelpers'
import { State } from '../../src/store'

const spyAxios = Axios


describe('DataEpic', () => {
  let store: MockStore<any>

  beforeEach(() => {
    const epicMiddleware = createMiddleware()
    const mockStore = configureMockStore<DeepPartial<State>>([epicMiddleware])

    store = mockStore({
      content: {
        data: ''
      }
    })

    epicMiddleware.run(getReadmeEpic)
  })

  it('Get README Success', () => {
    const data = 'Test'

    spyOn(spyAxios, 'get').and.returnValue(of({data}))
    store.dispatch(actionEmpty(Actions.GET_README))


    expect(store.getActions().slice(1)).toEqual([
      action(
        Actions.GET_README_SUCCESS,
        data,
      ),
    ])
  })
})

describe('Store tests', () => {

  it('Set state after get README', () => {
    const data = 'Test'

    expect(contentState(defState, action(Actions.GET_README_SUCCESS, data)))
      .toEqual({ ...defState, data, })
  })
})
