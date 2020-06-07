import {connect} from 'react-redux'
import {delEntry} from '../actions'
import EntryList from '../components/entrylist'

const mapStateToProps = state => ({
  entry: state.nameList
})

const mapDispatchToProps = dispatch => ({
  delEntry: id => dispatch(delEntry(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EntryList)
