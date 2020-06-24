import React from 'react';
import Entry from '../components/entry';

class EntryList extends React.Component {
  constructor(props){
    super(props)
    this.props.updateList()
  }

  render(){
    const {nameList, usid, delEntry } = this.props

    return<div>
    {nameList.map((name, id)=>
      <Entry key={id}
        classID={id}
        ukey={usid[id]}
        {...name}
        del={() => delEntry(usid[id])}/>)}
    </div>
  }
}

export default EntryList
