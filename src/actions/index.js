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
export const addCrop = () => {
  return {
    type: ADD_CROP,
  }
}

export const SET_CROP = 'SET_CROP'
export const setCrop = (crop) => {
  return {
    type: SET_CROP,
    crop
  }
}

export const REMOVE_CROP = 'REMOVE_CROP'
export const removeCrop = (id) => {
  return {
    type: REMOVE_CROP,
    id
  }
}

export const CLEAR_CROPS = 'CLEAR_CROPS'
export const clearCrops = () => {
  return {
    type: CLEAR_CROPS
  }
}
