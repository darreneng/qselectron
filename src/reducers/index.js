import { combineReducers } from 'redux'

import { * } from '../actions'

const image = (state = '', action) => {
  switch (action.type) {
    case SET_IMAGE:
      return action.path
    default:
      return state
  }
}

const labelDir = (state = '', action) => {
  switch (action.type) {
    case SET_LABEL_DIR:
      return action.path
    default:
      return state
  }
}

const crops = (state = [], action) => {
  switch (action.type) {
    case ADD_CROP:
      return [ ...state, crop ]
    case WRITE_LABEL:
      return []
    default:
      return state
  }
}


export default const App = combineReducers({
  image, labelDir, crops
})
