import React  from 'react';
import AddEntry from '../containers/addentry'
import EntryList from '../containers/entrylist'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Contact List</h1>
        <AddEntry />
        <hr />
        <EntryList />
      </div>
    );
  }
}

export default App;
