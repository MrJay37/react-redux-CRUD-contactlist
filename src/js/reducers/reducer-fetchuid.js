const userid = (userid =null, action) =>{
  switch(action.type){
    case 'FETCHUID':
    const UID = JSON.parse(localStorage.getItem('user'))
    if(UID !== null){
      return UID.uid
    }
    return null

    default:
    return userid
  }
}

export default userid
