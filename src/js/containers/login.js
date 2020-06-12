import Login from '../components/login'
import {connect} from 'react-redux'
import {login, checkIfLoggedOut, isSigningUp} from '../actions'

const mapStateToProps = state => ({
  isLoggedOut: state.isLoggedOut,
  isSignUp: state.isSigningup,
  loginAttemptStatus: state.loginAttemptStatus
})

const mapDispatchToProps = dispatch => ({
  login: (email, pw) => dispatch(login(email, pw)),
  checkIfLoggedIn: () => dispatch(checkIfLoggedOut()),
  isSigningUp: (bool) => dispatch(isSigningUp(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
