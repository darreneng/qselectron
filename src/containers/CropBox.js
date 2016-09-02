import { connect } from 'react-redux'
import CropData from '../components/CropData'

const mapStateToProps = (state) => {
  return {
    crops: state.crops
  }
}

const CropBox = connect(mapStateToProps)(CropData)

export default CropBox
