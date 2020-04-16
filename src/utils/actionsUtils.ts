import { Actions } from '../actions'

// Get action name
const actionName = (result: any, k: any) => {
  const num = ({ ...Actions } as any)[k]

  if (result[num]) {
    throw new Error(`the same action defined ${num}`)
  }

  result[num] = k
  return result
}
const actionsDist = Object.keys(Actions).reduce(actionName, {})

export const actionSanitizer = (a: any) => {
  return {
    ...a,
    type: actionsDist[a.type] || a.type,
  }
}
