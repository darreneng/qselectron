import React, { Component } from 'react';

import CropData from './CropData'
import LabelWrite from './LabelWrite'

export default class LabelForm extends Component {
  render() {
    return (
      <div>
        <LabelWrite src={this.state.src} crop={this.state.crop} />
        <CropData crop={this.props.crop} />
      </div>
    )
  }
}

LabelForm.propTypes = { crop: React.PropTypes.object }
