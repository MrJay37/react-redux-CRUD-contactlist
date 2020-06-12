const uid = (uid =null, action) =>{
  switch(action.type){
    case 'FETCHUID':
    const UID = JSON.parse(localStorage.getItem('user'))
    if(UID !== null){
      return UID.uid
    }
    return null

    default:
    return uid
  }
}

export default uid
