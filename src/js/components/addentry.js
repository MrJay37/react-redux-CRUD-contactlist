import React from 'react'
import {InputGroup, FormControl, Modal, Button} from 'react-bootstrap'

class AddEntry extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        show: false
      }
    this.handleClose=this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    //this.handleShow=this.handleShow.bind(this)
  }

  handleClose = () => this.setState({show:false})
  handleShow = () => this.setState({show:true})

  render(){
  let name, email, phone_number, address
  let {addEntry} = this.props

  return (<>
    <Button variant='primary' onClick={()=>this.handleShow()}>
    Add Contact </Button>

    <Modal show={this.state.show} onHide={this.handleClose}>
    <form className="Form" onSubmit={e => {
      e.preventDefault()
      if(!name.value.trim()){return}
      if(!email.value.trim()){return}
      if(!phone_number.value.trim()){return}
      if(!address.value.trim()){return}
      addEntry({name: name.value, email: email.value, phone_number: phone_number.value, address: address.value})
      email.value = ""; name.value = ""; phone_number.value=""; address.value=""
      this.setState({show: false})
    }}>
    <Modal.Header closeButton>
      <Modal.Title>Add Contact</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <InputGroup className="mb-3" >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        ref={node => (name = node)}
        placeholder= "Enter Name"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
    <InputGroup className="mb-3" >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="email"
        ref={node => (email = node)}
        placeholder= "Enter E-Mail"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
    <InputGroup className="mb-3" >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Phone</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="tel"
        ref={node => (phone_number = node)}
        placeholder= "Enter Phone Number"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
    <InputGroup className="mb-3" >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Address</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        as='textarea'
        ref={node => (address = node)}
        placeholder= "Enter Address"
        aria-label="With textarea"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
    </Modal.Body><Modal.Footer>
    <Button variant="outline-primary" type="submit">Submit</Button>{' '}
    </Modal.Footer></form>
    </Modal></>
  )
  }
}

export default AddEntry
