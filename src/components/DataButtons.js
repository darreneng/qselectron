import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

const DataButtons = (props) => {
  return (
    <div>
      <ButtonToolbar>
        <Button id='setImageBtn' onClick={props.handleChooseImageBtnClick}>
          Choose Image Source
        </Button>
        <Button id='labelWriteBtn'
                bsStyle="primary"
                onClick={props.handleLabelWriteBtnClick}>
          Write Label
        </Button>
        <Button id='labelDirBtn' onClick={props.handleLabelDirBtnClick}>
          Choose Label Directory
        </Button>
      </ButtonToolbar>
      <br/>
      <h5>Label Dir: {props.labelDir}</h5>
      <h5>Image Src: {props.image}</h5>
    </div>
  )
}

DataButtons.propTypes = {
  labelDir: React.PropTypes.string,
  image: React.PropTypes.string
}

export default DataButtons
