import React, { Component } from 'react';
import { Button, ButtonToolbar, Table } from 'react-bootstrap'
import { ipcRenderer as ipc } from 'electron'


function displayData(data) {
  return data ? data.toFixed(3) : 0;
}

/*/ Implement this some other time
const SavedData = (props) => {
  return (
      <Table bordered>
        <thead>
          <tr>
            <td>Saved crops</td>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
  )
}*/

const CropData = (props) => {
  return (
    <div className="CropData">
      <Button id='labelWriteBtn'
              bsStyle="primary"
              onClick={() => {ipc.send('label-write-dialog', props.crops)}}>
        Write Label
      </Button>
      <br/>
      <Table condensed bordered striped>
        <thead>
          <tr>
            <th className="col-md-3">Top Left X</th>
            <th className="col-md-3">Top Left Y</th>
            <th className="col-md-3">Bottom Right X</th>
            <th className="col-md-3">Bottom Right Y</th>
          </tr>
        </thead>
        <tbody>
          <tr className="info">
            <td>
              {displayData(props.crops.current.tlx)}
            </td>
            <td>
              {displayData(props.crops.current.tly)}
            </td>
            <td>
              {displayData(props.crops.current.brx)}
            </td>
            <td>
              {displayData(props.crops.current.bry)}
            </td>
          </tr>
        </tbody>
      </Table>
      <ButtonToolbar>
        <Button id="previous" onClick={() => {ipc.send('next-image', false)}}>
          Previous
        </Button>
        <Button id="next" onClick={() => {ipc.send('next-image', true)}}>
          Next
        </Button>
      </ButtonToolbar>
    </div>
  )
}

CropData.propTypes = { crop: React.PropTypes.object }

export default CropData;
