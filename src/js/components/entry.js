import React from 'react'
import {Redirect} from 'react-router-dom'
import {Card, Accordion, Button,Col, Row} from 'react-bootstrap'
import {Slate, withReact} from 'slate-react'
import {createEditor} from 'slate'

class Entry extends React.Component {
  constructor(props){
    super(props)
      this.state={
        redirect:false
    }
    this.editor = withReact(createEditor())
    this.goToEdit = this.goToEdit.bind(this)
  }
  goToEdit(){
    this.setState({redirect: !this.state.redirect})
  }

  render(){
    const {name, email, phone_number, address, date, description, ukey, del } = this.props
    return(
        <Card className="EntryCard">
        <Card.Header><Card.Title>{name.firstName + " " + name.lastName}</Card.Title></Card.Header>
        <Card.Body>
        <Row><Col><Card.Text>
          Email ID<br/>{email}<br/><br/>
          Phone Number<br/>{phone_number.code + phone_number.number}
        </Card.Text></Col>
        <Col><Card.Text className="Date">Date of Birth<br/>{date}</Card.Text></Col>
        <Col><Card.Text className="Address">
          Address<br />
          {address.streetOne}<br />
          {address.streetTwo?<>{address.streetTwo}<br /></>:null}
          {address.city +", "+address.state + ' ' + address.zip}
        </Card.Text></Col></Row>
        </Card.Body>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Description
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Slate editor={this.editor} value={description}/></Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion>
        <Card.Footer>
          <Row><Col><Button block variant="primary" onClick ={this.goToEdit}>Edit</Button></Col>
          {this.state.redirect && <Redirect to={{
            pathname:'/edit',
            name: name,
            email: email,
            phone_number: phone_number,
            address: address,
            date: date,
            description: description,
            ukey:ukey}}/>}
          <Col><Button block onClick ={del} variant="secondary">Delete</Button></Col></Row>
        </Card.Footer>
        </Card>
  )}
}

export default Entry
