import {connect} from 'react-redux'
import {switchMode, editEntry} from '../actions'
import Entry from '../components/entry'

function mapDispatchToProps(dispatch){
  return {
    switchMode: id => dispatch(switchMode(id)),
    editEntry: (id, name, email) => dispatch(editEntry(id, name, email))
  }
}
export default connect(null, mapDispatchToProps)(Entry)
