import React from 'react'
import {Redirect} from 'react-router-dom'
import {Card, Button,Col, Row} from 'react-bootstrap'

class Entry extends React.Component {
  constructor(props){
    super(props)
      this.state={
        redirect:false
    }

    this.goToEdit = this.goToEdit.bind(this)
  }
  goToEdit(){
    this.setState({redirect: !this.state.redirect})
  }

  render(){
    const {name, email, phone_number, address, ukey, del } = this.props
    return(
        <Card className="EntryCard">
        <Card.Header></Card.Header>
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Row><Col><Card.Text>
          Email ID: {email}
        </Card.Text>
        <Card.Text>
          Phone Number: {phone_number}
        </Card.Text></Col>
        <Col><Card.Text className="Address">
          {address}
        </Card.Text></Col></Row>
        </Card.Body>
        <Card.Footer>
          <Row><Col><Button block variant="primary" onClick ={this.goToEdit}>Edit</Button></Col>
          {this.state.redirect && <Redirect to={{
            pathname:'/edit',
            name: name,
            email: email,
            phone_number: phone_number,
            address: address,
            ukey:ukey}}/>}
          <Col><Button block onClick ={del} variant="secondary">Delete</Button></Col></Row>
        </Card.Footer>
        </Card>
  )}
}

export default Entry
