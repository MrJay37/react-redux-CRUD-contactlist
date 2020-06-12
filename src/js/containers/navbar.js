import NavBarBS from '../components/navbar'
import {connect} from 'react-redux'
import {logout} from '../actions'

const mapStateToProps = state => ({
  isLoggedOut: state.isLoggedOut
})
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBarBS)
