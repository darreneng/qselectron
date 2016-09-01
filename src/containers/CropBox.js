import { connect } from 'react-redux'
import CropData from '../components/CropData'

const mapStateToProps = (state) => {
  return {
    crop: state.crops.current
  }
}

const CropBox = connect(mapStateToProps)(CropData)

export default CropBox
