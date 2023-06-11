export type AE<T> = { type: T }
export type A<T, D> = {
  type: T,
  data: D,
}

export namespace Actions {
  export const SEND_HI = 10 as const
  export type SendHi = AE<typeof SEND_HI>

  export const TEST_EPIC = 11 as const
  export type TestEpic = AE<typeof TEST_EPIC>

  export const GET_README = 20 as const
  export type GetReadme = AE<typeof GET_README>
  export const GET_README_SUCCESS = 21 as const
  export type GetReadmeSuccess = A<typeof GET_README_SUCCESS, any>
}

export type Action = Actions.SendHi | Actions.TestEpic | Actions.GetReadme | Actions.GetReadmeSuccess

export const actionEmpty = <T>(type: T) => ({ type })
export const action = <T, D>(type: T, data: D) => ({ type, data })

export type Dispatch = (a: Action) => any
