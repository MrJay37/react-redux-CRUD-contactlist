import {connect} from 'react-redux'
import {addEntry} from '../actions'
import AddEntry from '../components/addentry'

const mapDispatchToProps = dispatch =>({
  addEntry: (key, person) => dispatch(addEntry(key, person))
})

export default connect(null, mapDispatchToProps)(AddEntry)
