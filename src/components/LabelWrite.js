import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

import { ipcRenderer as ipc } from 'electron'

class LabelDirBtn extends Component {
  constructor(props) {
    super(props);
    // TODO write in intial state here
    this.state = { labelDir: '' }
    this.handleLabelDirBtnClick = this.handleLabelDirBtnClick.bind(this)
  }
  componentDidMount() {
    ipc.on('selected-label-dir', (event, path) => {
      console.log('Label directory selected:' + path)
      this.setState({labelDir: path})
    })
  }
  handleLabelDirBtnClick() {
    // TODO save directory to write labels to
    console.log('label directory button clicked!')
    ipc.send('label-dir-dialog')
  }
  render() {
    return (
      <div>
        <Button id='labelDirBtn' onClick={this.handleLabelDirBtnClick}>
          Choose Label Directory
        </Button>
        <h5>{this.state.labelDir}</h5>
      </div>
    )
  }
}

class LabelWriteBtn extends Component {
  constructor(props) {
    super(props);
    // TODO write intitial state here
    this.handleLabelWriteBtnClick = this.handleLabelWriteBtnClick.bind(this)
  }
  componentDidMount() {
    // TODO listen for confirmation that file was successfully written
  }
  handleLabelWriteBtnClick() {
    // TODO write file on click, reset crop data, need to call prop CB
  }
  render() {
    return (
      <div>
        <Button id='labelWriteBtn' onClick={this.handleLabelWriteBtnClick}>
          Write Label
        </Button>
      </div>
    )
  }
}

export default class LabelWrite extends Component {
  constructor(props) {
    super(props);
    // TODO write in intial state here
  }
  render() {
    return (
      <ButtonGroup>
        <LabelDirBtn />
        <LabelWriteBtn />
      </ButtonGroup>
    )
  }
}
/*

*/
