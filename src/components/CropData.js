import React, { Component } from 'react';
import { Table, FormControl } from 'react-bootstrap'

class CropData extends Component {
  displayData(data) {
      return data ? data.toFixed(3) : 0;
  }
  render() {
    return(
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
                {this.displayData(this.props.crop.x)}
              </td>
              <td>
                {this.displayData(this.props.crop.y)}
              </td>
              <td>
                {this.displayData(this.props.crop.x + this.props.crop.width)}
              </td>
              <td>
                {this.displayData(this.props.crop.y + this.props.crop.height)}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

CropData.propTypes = { crop: React.PropTypes.object }
CropData.defaultProps = { crop: {} }

export default CropData;
