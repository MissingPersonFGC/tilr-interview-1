import actionTypes from '../actions/actionTypes'

const initialState = {
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_FETCH_CURRENT:
      return { ...state, all: action.payload }
    default:
      return state
  }
}
