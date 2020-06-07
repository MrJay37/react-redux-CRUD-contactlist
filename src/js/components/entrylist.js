import React from 'react';
import PropTypes from 'prop-types';
import Entry from '../containers/entry';

class EntryList extends React.Component {

  update(){
    this.forceUpdate()
  }
  render(){
    return <div><table className="Table">
      <thead ><tr>
        <th>Serial</th><th>Name</th><th>Email</th><th>Action</th>
      </tr></thead>
      <tbody>
      {this.props.entry.map(person => (
        <Entry key={person.id} {...person}
          onClickDel={() => {
            this.props.delEntry(person.id);
            this.update()}
            } />
      ))}
      </tbody>
    </table>
    <p className='Foot'>
    Total entries: {this.props.entry.length}
    </p>
    </div>
  }
}

EntryList.propTypes = {
  entry: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  delEntry: PropTypes.func.isRequired
}

export default EntryList
