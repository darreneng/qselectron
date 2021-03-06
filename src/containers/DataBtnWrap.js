import { connect } from 'react-redux'
import { ipcRenderer as ipc } from 'electron'
//import path from 'path'

import DataButtons from '../components/DataButtons'
import { setImage, setLabelDir, writeLabel } from '../actions'

const mapStateToProps = (state) => {
  return {
    labelDir: state.labelDir,
    image: state.image
  }
}

const mapDispatchToProps = (dispatch) => {
  // TODO move all this shit to actions
  return {
    handleLabelDirBtnClick: () => {
      ipc.send('label-dir-dialog')
    },
    handleChooseImageBtnClick: () => {
      ipc.send('choose-image-dialog')
    }
  }
}

const DataBtnWrap = connect(mapStateToProps, mapDispatchToProps)(DataButtons)
export default DataBtnWrap
