import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

import { ipcRenderer as ipc } from 'electron'

export default class LabelWrite extends Component {
  constructor(props) {
    super(props);
    this.state = { labelDir: '' }
    this.handleLabelDirBtnClick = this.handleLabelDirBtnClick.bind(this)
    this.handleLabelWriteBtnClick = this.handleLabelWriteBtnClick.bind(this)
  }
  componentDidMount() {
    ipc.on('selected-label-dir', (event, path) => {
      console.log('Label directory selected:' + path)
      this.setState({labelDir: path})
    })
    // TODO listen for confirmation that file was successfully written
    ipc.on('label-write-confirm', (event) => {})
  }
  handleLabelDirBtnClick() {
    // TODO save directory to write labels to
    console.log('label directory button clicked!')
    ipc.send('label-dir-dialog')
  }
  handleLabelWriteBtnClick() {
    // TODO write file on click, reset crop data, need to call prop CB
    ipc.send('label-write-dialog', { src: this.props.src,
                                     crop: this.props.crop,
                                     labelDir: this.state.labelDir
                                   })
  }
  render() {
    return (
      <ButtonToolbar>
        <Button id='labelWriteBtn'
                bsStyle="primary"
                onClick={this.handleLabelWriteBtnClick}>
          Write Label
        </Button>
        <Button id='labelDirBtn' onClick={this.handleLabelDirBtnClick}>
          Choose Label Directory
        </Button>
        <h5>{this.state.labelDir}</h5>
      </ButtonToolbar>
    )
  }
}
/*

*/
