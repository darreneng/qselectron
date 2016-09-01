import { combineReducers } from 'redux'

import { SET_IMAGE, NEXT_IMAGE, SET_LABEL_DIR, WRITE_LABEL, ADD_CROP, SET_CROP,
         REMOVE_CROP, CLEAR_CROPS } from '../actions'

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

const saved = (state = [], action) => {
  switch(action.type) {
    case REMOVE_CROP:
      return state.filter((val, i) => {
        return i !== action.id
      })
    case CLEAR_CROPS:
    case WRITE_LABEL:
      return []
    default:
      return state
  }
}

const crops = (state = {}, action) => {
  function getCrop(crop) {
    return {
      tlx: crop.x, tly: crop.y,
      brx: crop.x + crop.width, bry: crop.y + crop.height
    }
  }
  switch(action.type) {
    case SET_CROP:
      return Object.assign({}, state, { current: getCrop(action.crop) })
    case ADD_CROP:
      return Object.assign({}, state,
              { saved: [...state.saved, Object.assign({}, state.current)] })
    case REMOVE_CROP:
    case CLEAR_CROPS:
    case WRITE_LABEL:
      return Object.assign({}, state, { saved: saved(state.saved, action) })
    default:
      return state
  }
}

const bboxApp = combineReducers({
  image, labelDir, crops
})
export default bboxApp
