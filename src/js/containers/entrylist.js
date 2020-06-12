import { connect } from 'react-redux';
import { delEntry, updateList } from '../actions'
import EntryList from '../components/entrylist'

const mapStateToProps = state => ({
  nameList: state.nameList,
  usid: state.uid
})

function mapDispatchToProps(dispatch) {
  return{
    delEntry: key => dispatch(delEntry(key)),
    updateList: () => dispatch(updateList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryList)
