import React from "react"
import { render } from "react-dom"

import App from "./App.js"

import { createStore } from "redux"
import { Provider } from "react-redux"

import bboxApp from './reducers'
import { setLabelDir, setImage, writeLabel } from './actions'

import { ipcRenderer as ipc } from 'electron'

const initialState = {
  image: '',
  labelDir: '',
  crops: {
    current: { tlx: 0, tly: 0, brx: 0, bry: 0 },
    saved: []
  }
}

const store = createStore(bboxApp, initialState)

// Listeners
ipc.on('selected-label-dir', (event, path) => {
  console.log('Label directory selected:' + path)
  store.dispatch(setLabelDir(path))
})

ipc.on('selected-image', (event, path) => {
  console.log('Image Selected:' + path)
  store.dispatch(setImage(path))
})

ipc.on('label-write-success', (event, path) => {
  alert('Successfully wrote label at"' + path + '"')
  store.dispatch(writeLabel())
})

ipc.on('label-write-error', (event) => {
  alert('Error! No label directory specified. Please choose a label directory')
})
// End listeners

// Debug
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
