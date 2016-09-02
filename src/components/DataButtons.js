import React from 'react'
import { Button, ButtonToolbar, Label, Row, Col } from 'react-bootstrap'

const DataButtons = (props) => {
  return (
    <div>
      <ButtonToolbar>
        <Button id='setImageBtn' onClick={props.handleChooseImageBtnClick}>
          Choose Image Source
        </Button>
        <h5><Label>Image Source:</Label> {props.image}</h5>
      </ButtonToolbar>
      <br/>
      <ButtonToolbar>
        <Button id='labelDirBtn' onClick={props.handleLabelDirBtnClick}>
          Choose Label Directory
        </Button>
        <h5><Label>Label Dir:</Label> {props.labelDir}</h5>
      </ButtonToolbar>
    </div>
  )
}

DataButtons.propTypes = {
  labelDir: React.PropTypes.string,
  image: React.PropTypes.string
}

export default DataButtons
