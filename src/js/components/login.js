import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class Login extends React.Component {
  render(){
    let email, password

    return(<Container>
      <Form className="LoginForm" onSubmit={(e) => {
        e.preventDefault()
        this.props.login(email.value, password.value)
        this.props.checkIfLoggedIn()
        }}>
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
      </Form>
      <h4 className="SignupLink">Don't have an account yet? Sign in <button onClick={() => this.props.isSigningUp(true)}>here</button></h4>
      {this.props.isSignUp && <Redirect to="/signup"/>}
      {!this.props.isLoggedOut && <Redirect to='/' />}
      </Container>
  )}
}

export default Login
