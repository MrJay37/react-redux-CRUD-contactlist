import React from 'react'
import {Redirect} from 'react-router-dom'
import {InputGroup, FormControl, Button, Badge} from 'react-bootstrap'

class Edit extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        isSubmitted: false
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(){
    this.setState({isSubmitted: !this.state.isSubmitted})
  }

  render(){
    console.log(this.props.location)
    if(this.props.location.name === undefined){
      return <Redirect to='/' />
    }
    let {name, email, phone_number, address, ukey} = this.props.location
    let fname, femail, fphone_number, faddress

    return(<div>
    <form id="form" className="Form" onSubmit={e => {
      e.preventDefault()
      if(!fname.value.trim()){fname.value = name}
      if(!femail.value.trim()){femail.value = email}
      if(!fphone_number.value.trim()){fphone_number.value = phone_number}
      if(!faddress.value.trim()){faddress.value = address}

    this.props.editEntry(ukey, {
      name: fname.value,
      email: femail.value,
      phone_number: fphone_number.value,
      address: faddress.value});
    this.submitForm()
    }}>



    <h3><Badge variant="secondary">Edit Contact</Badge></h3>
    <InputGroup className="mb-3" >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        ref={node => (fname = node)}
        placeholder= {name}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
    <InputGroup className="mb-3" >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        ref={node => (femail = node)}
        placeholder= {email}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
    <InputGroup className="mb-3" >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Phone</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        ref={node => (fphone_number = node)}
        placeholder= {phone_number}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
    <InputGroup className="mb-3" >
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Address</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        as="textarea"
        ref={node => (faddress = node)}
        placeholder= {address}
        aria-label="With textare"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
    <Button variant="outline-primary" type="submit">Submit</Button>{' '}







    </form>
    {this.state.isSubmitted && <Redirect to="/" />}</div>
  )}
}

export default Edit
