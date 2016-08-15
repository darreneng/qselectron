import React, { Component } from 'react';
import logo from './logo.svg';

import Electron from 'electron'
import os from 'os'
// Components
import ImageForm from './components/ImageForm'
import LabelForm from './components/LabelForm'
import ReactCrop from 'react-image-crop'
// Styles
import './css/App.css'
import './css/ReactCrop.css'
import './css/index.css'

const src = "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-12.jpg";
//const src = "./Images/puppy2.jpg"

class App extends Component {
  constructor(props) {
    super(props);
    // TODO remove demo link
    this.state = { crop: {}, src: src};
    // Need to bind member methods used as callbacks in ES6
    this.handleOnComplete = this.handleOnComplete.bind(this);
  }
  handlePathSubmit(imagePath) {
    // send ajax to server
  }
  handleLabelSubmit(data) {
    // TODO write label to txt file
    $.post('/api/labels', this.props.crop, (data) => {

    })
  }
  handleOnComplete(crop) {
    console.log(crop)
    this.setState({ crop: crop })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bounding Box Generator</h2>
        </div>
        <div className="App-body container">
          We are using node {process.versions.node}
          <ImageForm onPathSubmit={this.handlePathSubmit}/>
          <LabelForm crop={this.state.crop}/>
          <ReactCrop src={this.state.src} onComplete={this.handleOnComplete} />
        </div>
      </div>
    );
  }
}

export default App;
