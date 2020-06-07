import React from 'react'
import PropTypes from 'prop-types'

class Entry extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props
    this.handleChange = this.handleChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleChange(event){
    this.setState({name: event.target.value})
    this.state.editEntry(this.state.id, this.state.name, this.state.email)
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
    this.state.editEntry(this.state.id, this.state.name, this.state.email)
    return true
  }

  InputName(){
    return <input value={this.state.name} placeholder="Enter name" onChange={this.handleChange} onSubmit={() => {
      this.state.switchMode(this.state.id)
      this.setState({mode: !this.state.mode})}} />
  }

  InputEmail(){
    return <input value={this.state.email} placeholder="Enter email" onChange={this.handleEmailChange} />
  }

  modeIsTrue(){
    return <td>
            <button onClick={() => {
            this.state.switchMode(this.state.id)
            this.setState({mode: !this.state.mode})}}>Save</button></td>
  }

  modeIsFalse(){
    return <td><button onClick ={this.state.onClickDel}>Delete</button>
            <button onClick={() => {
            this.state.switchMode(this.state.id)
            this.setState({mode: !this.state.mode})}}>Edit</button></td>
  }
  render(){
    return <tr>
      <td>{this.state.id+1}</td>
      <td>{this.state.mode? this.InputName() : this.state.name}</td>
      <td>{this.state.mode? this.InputEmail(): this.state.email}</td>
      {this.state.mode? this.modeIsTrue() : this.modeIsFalse()}
    </tr>
  }
}

Entry.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mode: PropTypes.bool.isRequired,
  onClickDel: PropTypes.func.isRequired,
}

export default Entry
