import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button }
       from 'react-bootstrap'

import { shell } from 'electron'
import os from 'os'

class ImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { imagePath: '' };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(e) {
    this.setState({ imagePath: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    /*
    let imagePath = this.state.imagePath;
    if (!imagePath) {
      return;
    }
    */
    //this.props.onPathSubmit(imagePath);
    shell.showItemInFolder(os.homedir())
  }
  render() {
    return(
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formPathText">
          <ControlLabel>Path to Images</ControlLabel>
          <FormControl type="text"
                       value={this.state.imagePath}
                       placeholder="Enter path"
                       onChange={this.handleChange} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default ImageForm;
