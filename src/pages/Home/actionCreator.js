import { CHANGE_LIST } from './actionTypes'

const getChangeListAction = (list) => {
  return {
    type: CHANGE_LIST,
    list
  }
}

const getAction = () => {
  return (dispatch) => {
    fetch('/api/home.json')
      .then((res) => res.json())
      .then((res) => {
        dispatch(getChangeListAction(res.data.list))
      })
      .catch(handleGetInfoErr)
  }
}

const handleGetInfoErr = () => {
  console.log('Error')
}

export { getAction };