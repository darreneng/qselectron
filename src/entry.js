import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { createStore } from "redux"
import { Provider } from "react-redux"
import bboxApp from './reducers'

let initialState = {
  image: '',
  labelDir: '',
  crops: {
    current: {},
    saved: []
  }
}

let store = createStore(bboxApp, initialState)

ReactDOM.render(<App />,
                document.getElementById('root'));
