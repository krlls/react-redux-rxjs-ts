
export type AE<T> = { type: T }
export type A<T, D> = {
  type: T,
  data: D,
}

export namespace Actions {
  export const SEND_HI = 'SEND_HI'
  export type SendHi = AE<typeof SEND_HI>
}

export type Action = Actions.SendHi

export const actionEmpty = <T>(type: T) => ({ type })
export const action = <T, D>(type: T, data: D) => ({ type, data })

export type Dispatch = (a: Action) => any
