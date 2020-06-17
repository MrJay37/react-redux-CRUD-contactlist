import Profile from '../components/profile'
import {connect} from 'react-redux'
import {deleteProfile} from '../actions'

const mapStateToProps = state => ({
  isLoggedOut: state.isLoggedOut
})
const mapDispatchToProps = dispatch => ({
  deleteProfile: () => dispatch(deleteProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
