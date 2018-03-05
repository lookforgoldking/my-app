import { CHANGE_LIST } from './actionTypes'

const defaultState = {
  list: [],
  menu: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST: 
      return {
        list: action.data.list,
        menu: action.data.menu
      }
    default: 
      return state
  }
}

export default reducer;