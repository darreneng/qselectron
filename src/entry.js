import React from "react"
import { render } from "react-dom"

import App from "./App.js"
import ReactCropWrap from "./containers/ReactCropWrap"
import CropBox from "./containers/CropBox"
import DataBtnWrap from "./containers/DataBtnWrap"

import { createStore } from "redux"
import { Provider } from "react-redux"

import bboxApp from './reducers'
import { setLabelDir } from './actions'

import { ipcRenderer as ipc } from 'electron'

const initialState = {
  image: '/Users/darreneng/Downloads/Images/puppy2.jpg',
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

// Debug
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <div>
      <DataBtnWrap />
      <CropBox />
      <ReactCropWrap />
    </div>
  </Provider>,
  document.getElementById('root')
)
