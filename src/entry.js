import React from "react"
import { render } from "react-dom"
import App from "./App.js"
import { createStore } from "redux"
import { Provider } from "react-redux"
import bboxApp from './reducers'

const initialState = {
  image: '',
  labelDir: '',
  crops: {
    current: {},
    saved: []
  }
}

let store = createStore(bboxApp, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
