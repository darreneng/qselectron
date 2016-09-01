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
  return {
    handleLabelDirBtnClick: () => {
      ipc.send('label-dir-dialog')
    },
    handleLabelWriteBtnClick: () => {},
    handleChooseImageBtnClick: () => {}
  }
}

const DataBtnWrap = connect(mapStateToProps, mapDispatchToProps)(DataButtons)
export default DataBtnWrap
