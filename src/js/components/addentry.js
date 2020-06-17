import React from 'react'
import { Form, Modal, Button, Col} from 'react-bootstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

class AddEntry extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        show: false,
        text: '',
        wrongPhoneNo: false
      }
    this.handleClose=this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose = () => this.setState({show:false})
  handleShow = () => this.setState({show:true})

  render(){
  let firstName, lastName, email, phone = {code: '', number: ''}, address ={streetOne: '', streetTwo: '', city: '', state:'', zip:''}, date
  const {addEntry} = this.props

  return (<>
    <Button variant='primary' onClick={()=>this.handleShow()}>
    Add Contact </Button>

    <Modal show={this.state.show} onHide={this.handleClose}>
    <Form className="Form" onSubmit={e => {
      e.preventDefault()

      if(!firstName.value.trim()){
        if(!lastName.value.trim()){
          return;
        }
        return;
      }

      const name = {firstName: firstName.value.trim(), lastName: lastName.value.trim()}

      if(!email.value.trim()){return}
      const em = email.value;

      if(!address.streetOne.value.trim()){
        if(!address.city.value.trim()){
          if(!address.state.value.trim()){
            if(!address.zip.value.trim()){
            }
          }
        }
        return
      }

      const addRess = {streetOne: address.streetOne.value, streetTwo: address.streetTwo.value, city: address.city.value, state: address.state.value, zip: address.zip.value}

      if(!phone.number.value.trim()){
          return
      } else if(phone.number.value.length !== 10){ this.setState({wrongPhoneNo: true}); return}

      const phone_number = {code: phone.code.value, number: phone.number.value}

      addEntry({name: name, email: em, phone_number: phone_number , address: addRess, date: date.value, description: this.state.text})
      this.setState({show: false})
    }}>
    <Modal.Header closeButton>
      <Modal.Title>Add Contact</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label> First Name</Form.Label>
        <Form.Control ref={node => (firstName = node)} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control ref={node => (lastName = node)}/>
      </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" ref={node => (email = node)}/>
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control type="date" ref={node => (date = node)}/>
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridAddStOne">
      <Form.Label>Street 1</Form.Label>
      <Form.Control ref={node => (address.streetOne = node)}/>
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridAddStTwo">
      <Form.Label>Street 2</Form.Label>
      <Form.Control ref={node => (address.streetTwo = node)}/>
    </Form.Group>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control ref={node => (address.city = node)}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control ref={node => (address.state = node)} />
    </Form.Group>
    </Form.Row>

    <Form.Row>
      <Col xs={3}>
      <Form.Label>ZIP</Form.Label>
      <Form.Control ref={node => (address.zip = node)} />
      </Col>

      <Col xs={3}>
      <Form.Label>Intl. Code</Form.Label>
      <Form.Control
      as="select"
      custom
      ref={node => (phone.code = node)}>
      <option value="+1">+1</option>
      <option value="+91">+91</option>
      </Form.Control>
      </Col>

      <Col>
      <Form.Label>Phone</Form.Label>
      <Form.Control type="tel" ref={node => (phone.number = node)} />
      </Col>
    </Form.Row>

    <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>Description</Form.Label>
      <ReactQuill className="Description" value={this.state.text} onChange={e => this.setState({text: e})}/>
      </Form.Group>
    </Form.Row>

    </Modal.Body><Modal.Footer>
    <Button variant="outline-primary" type="submit">Submit</Button>{' '}
    </Modal.Footer></Form>
    </Modal></>
  )
  }
}

export default AddEntry
