import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { createStore } from "redux"
import { Provider } from "react-redux"
import bboxApp from './reducers'

let store = createStore(bboxApp)

ReactDOM.render(<App />,
                document.getElementById('root'));
