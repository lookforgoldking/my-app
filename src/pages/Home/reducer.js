import { CHANGE_LIST } from './actionTypes'

const defaultState = {
  list: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        list: action.list
      }
    default:
      return state
  }
}

export default reducer;