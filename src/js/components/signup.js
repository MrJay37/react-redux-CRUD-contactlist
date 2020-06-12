import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      pwnot: false
    }
  }
  render(){
    this.props.checkIfLoggedIn()

    let email, password, repassword
    return<><Form className="LoginForm" onSubmit={(e) => {
      e.preventDefault()
      if(password.value===repassword.value){
      this.props.signUp(email.value, password.value)
      this.props.isSigningUp(false)
      this.props.checkIfLoggedIn()
    }
    else{this.setState({pwnot: true})}
      }}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={node => email=node} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={node => password=node} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formGroupRePassword">
        <Form.Label>Re-enter Password</Form.Label>
        <Form.Control ref={node => repassword=node} type="password" placeholder="Re-enter Password" />
      </Form.Group>
      {this.state.pwnot && <h4 className="errorAlert">Passwords don't match</h4>}
      <Button type="submit">Submit</Button>
    </Form>
    {!this.props.isSignUp && <Redirect to='/' />}
    </>
  }
}

export default SignUp


//this.props.checkIfLoggedIn()
