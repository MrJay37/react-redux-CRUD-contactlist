import React from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Col, Button, Badge} from 'react-bootstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

class Edit extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        isSubmitted: false,
        text: this.props.location.description,
        wrongPhoneNo: false
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(){
    this.setState({isSubmitted: !this.state.isSubmitted})
  }

  render(){
    if(this.props.location.name === undefined){
      return <Redirect to='/' />
    }
    if(this.props.isLoggedOut){
      return <Redirect to='/' />
    }
    let {name, email, phone_number, address, date, ukey} = this.props.location
    let fFirstName, fLastName, femail, fphone ={code: '', number: ''}, faddress = {streetOne:'', streetTwo: '', city: '', state: '', zip: ''}, fdate
    let ename, eemail, ephone={code: '', number: ''}, eaddress = {streetOne:'', streetTwo: '', city: '', state: '', zip: ''}, edate
    return(<div>
    <Form id="form" className="Form" onSubmit={e => {
      e.preventDefault()
      if(!fFirstName.value.trim()){
        if(!fLastName.value.trim()){
          ename={firstName: name.firstName, lastName: name.lastName}
        }
        ename={firstName: name.firstName, lastName: name.lastName}
      }
      else{
        ename = {firstName: fFirstName.value.trim(), lastName: fLastName.value.trim()}
      }

      if(!femail.value.trim()){eemail=email}
      else{eemail = femail.value}

      if(!faddress.streetOne.value.trim()){
        eaddress.streetOne = address.streetOne
      }
      else{
        eaddress.streetOne = faddress.streetOne.value
      }

      if(!faddress.streetTwo.value.trim()){
        eaddress.streetTwo = ""
      }
      else{
        eaddress.streetTwo = faddress.streetTwo.value
      }
      if(!faddress.city.value.trim()){
        eaddress.city = address.city
      }
      else{
        eaddress.city = faddress.city.value
      }

      if(!faddress.state.value.trim()){
        eaddress.state = address.state
      }
      else{
        eaddress.state = faddress.state.value
      }

      if(!faddress.zip.value.trim()){
        eaddress.zip = address.zip
      }
      else{
        eaddress.zip = faddress.zip.value
      }

      if(!fphone.number.value.trim()){
          ephone.number = phone_number.number
      } else if(fphone.number.value.length !== 10){ this.setState({wrongPhoneNo: true}); return}
      else{ephone = {code: fphone.code.value, number: fphone.number.value}}

      if(!fdate.value.trim()){edate = date}
      else{edate=fdate.value}

    this.props.editEntry(ukey, {name: ename, email: eemail, phone_number: ephone, address: eaddress, date: edate, description: this.state.text});
    this.submitForm()
    }}>
    <h3><Badge variant="secondary">Edit Contact</Badge></h3>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label> First Name</Form.Label>
        <Form.Control ref={node => (fFirstName = node)} placeholder={name.firstName} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control ref={node => (fLastName = node)} placeholder={name.lastName}/>
      </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" ref={node => (femail = node)} placeholder={email}/>
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control type="date" ref={node => (fdate = node)}
      placeholder={date}/>
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridAddStOne">
      <Form.Label>Street 1</Form.Label>
      <Form.Control ref={node => (faddress.streetOne = node)} placeholder={address.streetOne}/>
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridAddStTwo">
      <Form.Label>Street 2</Form.Label>
      <Form.Control ref={node => (faddress.streetTwo = node)} placeholder={address.streetTwo}/>
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control ref={node => (faddress.city = node)} placeholder={address.city}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control ref={node => (faddress.state = node)} placeholder={address.state} />
    </Form.Group>
    </Form.Row>

    <Form.Row>
      <Col xs={3}>
      <Form.Label>ZIP</Form.Label>
      <Form.Control ref={node => (faddress.zip = node)} placeholder={address.zip} />
      </Col>

      <Col xs={3}>
      <Form.Label>Intl. Code</Form.Label>
      <Form.Control
      as="select"
      custom
      ref={node => (fphone.code = node)}
      >
      <option value="+1">+1</option>
      <option value="+91">+91</option>
      </Form.Control>
      </Col>

      <Col>
      <Form.Label>Phone</Form.Label>
      <Form.Control type="tel" ref={node => (fphone.number = node)} placeholder={phone_number.number} />
      </Col>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>Description</Form.Label>
      <ReactQuill className="Description" value={this.state.text} onChange ={e => this.setSTate({text: e})} />
      </Form.Group>
    </Form.Row><br />

    <Form.Row>
      <Button variant="outline-primary" type="submit">Submit</Button>
      <Button variant="outline-secondary" onClick={() => this.setState({isSubmitted: true})} >Cancel</Button>
    </Form.Row>
    </Form>
    {this.state.isSubmitted && <Redirect to="/" />}</div>
  )}
}

export default Edit
