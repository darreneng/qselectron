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
  switch(action.type) {
    case SET_CROP:
      return { current: action.crop, saved: state.saved }
    case ADD_CROP:
      return { current: state.current,
               saved: [ ...state.saved, Object.assign({}, state.current) ] }
    case REMOVE_CROP:
    case CLEAR_CROPS:
    case WRITE_LABEL:
      return { current: state.current, saved: saved(state.saved, action) }
  }
}

/*
const crops = (state = [], action) => {
  switch (action.type) {
    case ADD_CROP:
      return [ ...state, crop ]
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
*/


export const bboxApp = combineReducers({
  image, labelDir, crops
})
