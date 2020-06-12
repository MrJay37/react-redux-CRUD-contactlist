import React from 'react'
import AddEntry from '../containers/addentry'
import EntryList from '../containers/entrylist'
import {Redirect} from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <><br />
    {this.props.isLoggedOut && <Redirect to='/login'/>}
    <AddEntry />
    <EntryList />
    <br />
    </>
    )
  }
}

export default Home
