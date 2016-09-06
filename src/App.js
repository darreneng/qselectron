import React, { Component } from 'react'
// Styles
import './css/App.css'
import './css/ReactCrop.css'
import './css/index.css'

// Components
import DataBtnWrap from './containers/DataBtnWrap'
import CropBox from './containers/CropBox'
import ReactCropWrap from './containers/ReactCropWrap'

const App = (props) => {
  return (
    <div className="App container">
      <DataBtnWrap />
      <CropBox />
      <ReactCropWrap />
    </div>
  )
}

export default App
