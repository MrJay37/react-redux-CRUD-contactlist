import React from 'react'
import {connect} from 'react-redux'
import {addEntry} from '../actions'

const AddEntry = ({dispatch}) => {
  let name, email

  return(
    <form className="Form" onSubmit={e => {
      e.preventDefault()
      if(!name.value.trim()){
        return
      }

      if(!email.value.trim()){
        return
      }
      dispatch(addEntry(name.value, email.value))
      email.value=""
      name.value=""
    }}>
    <input className="f-Name" ref={node => (name = node)} placeholder="Enter Name" />
    <input className="f-email"ref={node => (email = node)} placeholder="Enter E-Mail"/><br />
    <input className="Submit" type="submit" value="Submit" />
    </form>
  )
}

export default connect()(AddEntry)
