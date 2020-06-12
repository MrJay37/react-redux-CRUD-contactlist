import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'

class NavBarBS extends React.Component{
  render(){
  return(
    <>
      <Navbar  bg="dark" variant="dark">
        <Nav.Link href="/" className="TopHead"><h1>FoneBooc</h1></Nav.Link>
        {!this.props.isLoggedOut && <Button variant="outline-secondary" onClick={this.props.logout}>Log Out</Button>}
      </Navbar>
    </>
  )}
}

export default NavBarBS
