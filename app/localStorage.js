/* global localStorage */

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveState = (state) => {
  let saved = { app: {} }
  saved.app = state.app
  try {
    const serializedState = JSON.stringify(saved)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    // Ignore write error
  }
}
