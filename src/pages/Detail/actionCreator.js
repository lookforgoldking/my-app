import { CHANGE_DETAIL } from './actionTypes';

const createChangeInfoAction = (detail) => {
  return {
    type: CHANGE_DETAIL,
    value: detail
  }
}

const getAction = (id) => {
  return (dispatch) => {
    fetch('/api/detail.json?id=' + id)
      .then((res) => res.json())
      .then((res) => {
        dispatch(createChangeInfoAction({...res.data}))
      })
      .catch(handleGetInfoErr)
  }
}

const handleGetInfoErr = () => {
  console.log('Error')
}

export { getAction };