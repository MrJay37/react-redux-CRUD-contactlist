import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'

class NavBarBS extends React.Component{
  render(){
  return(
    <>
      <Navbar  bg="dark" variant="dark">
        {this.props.isLoggedOut && <><br /><br /><br /></>}
        {!this.props.isLoggedOut && <><Nav.Link href="/" className="TopHead"><h1>FoneBooc</h1></Nav.Link>
        <div className="profileButtons">
        <a href="/profile"><Button variant = "outline-primary" >Profile </Button></a>
        <Button variant = "outline-secondary"  onClick={this.props.logout}>Log Out</Button></div></>}
      </Navbar>
    </>
  )}
}

export default NavBarBS
