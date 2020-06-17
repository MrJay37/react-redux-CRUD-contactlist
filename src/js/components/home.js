import React from 'react'
import AddEntry from '../containers/addentry'
import EntryList from '../containers/entrylist'
import Login from '../containers/login'

class Home extends React.Component{
  render(){
    return(
      <><br />
    {this.props.isLoggedOut ? <Login /> : <>
    <AddEntry />
    <EntryList /></>}
    <br />
    </>
    )
  }
}

export default Home
