import {connect} from 'react-redux'
import {editEntry} from '../actions'
import Edit from '../components/edit'


const mapStateToProps = state => ({
  isLoggedOut: state.isLoggedOut
})

const mapDispatchToProps = dispatch => ({
  editEntry: (key, person) => dispatch(editEntry(key, person))
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
