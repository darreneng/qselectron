import ReactCrop from 'react-image-crop'

import { connect } from 'react-redux'
import { setCrop } from '../actions'

const mapStateToProps = (state) => {
  return {
    src: state.image
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComplete: (crop) => {
      dispatch(setCrop(crop))
    }
  }
}

const ReactCropWrap = connect(mapStateToProps, mapDispatchToProps)(ReactCrop)

export default ReactCropWrap
