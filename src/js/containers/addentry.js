import React from 'react'
import {connect} from 'react-redux'
import {addEntry} from '../actions'

const AddEntry = ({dispatch}) => {
  let name, email

  return(<div>
    <form onSubmit={e => {
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
    <input ref={node => (name = node)} placeholder="Enter Name" />
    <input ref={node => (email = node)} placeholder="Enter E-Mail"/>
    <input type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default connect()(AddEntry)
