import SignUp from '../components/signup'
import {connect} from 'react-redux'
import {signUp, checkIfLoggedOut, isSigningUp} from '../actions'

const mapStateToProps = state => ({
  isLoggedOut: state.isLoggedOut,
  isSignUp: state.isSigningup,
  loginAttemptStatus: state.loginAttemptStatus
})

const mapDispatchToProps = dispatch => ({
  signUp: (email, pw) => dispatch(signUp(email, pw)),
  checkIfLoggedIn: () => dispatch(checkIfLoggedOut()),
  isSigningUp: (bool) => dispatch(isSigningUp(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
