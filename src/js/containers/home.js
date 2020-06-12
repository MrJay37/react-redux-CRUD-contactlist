import Home from '../components/home'
import {connect} from 'react-redux'
import {checkIfLoggedOut} from '../actions'

const mapStateToProps = state => ({
  isLoggedOut: state.isLoggedOut,
  isSigningup: state.isSigningup
})

const mapDispatchToProps = dispatch => ({
  checkIfLoggedIn: () => dispatch(checkIfLoggedOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
