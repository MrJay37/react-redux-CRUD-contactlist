import React from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class Login extends React.Component {
  constructor(props){
    super(props)
      this.state ={
        show: true
      }
    this.handleClose=this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose = () => this.setState({show:false})
  handleShow = () => this.setState({show:true})

  render(){
    let email, password

    return(<Modal
            show={this.state.show}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}>
      <Form className="LoginForm" onSubmit={(e) => {
        e.preventDefault()
        this.props.login(email.value, password.value)
        this.props.checkIfLoggedIn()
        }}>
        <Modal.Header><Modal.Title>Login</Modal.Title></Modal.Header>
        <Modal.Body>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={node => email=node} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={node => password=node} type="password" placeholder="Password" />
        </Form.Group>

        {this.props.loginAttemptStatus && <h4 className="errorAlert">Incorrect Email or Password</h4>}
        <Button type="submit">Submit</Button>
        </Modal.Body>

      <Modal.Footer>
      <h4 className="SignupLink">Don't have an account yet? Sign up <button onClick={() => this.props.isSigningUp(true)}>here</button></h4>
      {this.props.isSignUp && <Redirect to="/signup"/>}
      {!this.props.isLoggedOut && <Redirect to='/' />}
      </Modal.Footer>
      </Form>
      </Modal>
  )}
}

export default Login
