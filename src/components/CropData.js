import React, { Component } from 'react';
import { Table, FormControl } from 'react-bootstrap'


function displayData(data) {
  return data ? data.toFixed(3) : 0;
}

const CropData = (props) => {
  return (
    <div className="CropData">
      <Table condensed bordered>
        <thead>
          <tr>
            <td className="col-md-3">Top Left X</td>
            <td className="col-md-3">Top Left Y</td>
            <td className="col-md-3">Bottom Right X</td>
            <td className="col-md-3">Bottom Right Y</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {displayData(props.crop.tlx)}
            </td>
            <td>
              {displayData(props.crop.tly)}
            </td>
            <td>
              {displayData(props.crop.brx)}
            </td>
            <td>
              {displayData(props.crop.bry)}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

CropData.propTypes = { crop: React.PropTypes.object }

export default CropData;
