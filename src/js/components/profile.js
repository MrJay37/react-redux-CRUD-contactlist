import React from 'react'
import {Button, Container, Modal} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class Profile extends React.Component {
  constructor(props){
    super(props)
      this.state ={
        show: false
      }
    this.handleClose=this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose = () => this.setState({show:false})
  handleShow = () => this.setState({show:true})

  render(){
    return <Container className="userprofile">
      <h1>This is you!</h1>
      <Button variant="danger" onClick={this.handleShow}>Delete Profile</Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header><Modal.Title>Confirm</Modal.Title></Modal.Header>
        <Modal.Body>Confirm delete? Pls don't go </Modal.Body>
        <Modal.Footer><Button onClick={() =>{
          this.props.deleteProfile();
          this.handleClose()}}>
          Bye</Button></Modal.Footer>
      </Modal>
      {this.props.isLoggedOut && <Redirect to='/'/>}
    </Container>
  }
}

export default Profile
