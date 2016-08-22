export const SET_IMAGE = 'SET_IMAGE'
export const setImage = (path) => {
  // TODO ipc send
  return {
    type: SET_IMAGE,
    path
  }
}

export const NEXT_IMAGE = 'NEXT_IMAGE'
export const nextImage = (next) => {
  // TODO ipc send
  return {
    type: NEXT_IMAGE,
    next
  }
}

export const SET_LABEL_DIR = 'SET_LABEL_DIR'
export const setLabelDir = (path) => {
  // TODO ipc send
  return {
    type: SET_LABEL_DIR,
    path
  }
}

export const WRITE_LABEL = 'WRITE_LABEL'
export const writeLabel = () => {
  // TODO ipc send
  return {
    type: WRITE_LABEL
  }
}

export const ADD_CROP = 'ADD_CROP'
export const addCrop = (crop) => {
  return {
    type: ADD_CROP,
    crop
  }
}
