const isLoggedOut = (state = false, action) => {
  switch(action.type){
    case 'CHECKIFLOGGEDOUT':
    if(JSON.parse(localStorage.getItem('user')) === null) {
      return true
    }
    return false

    default:
    return state
  }
}

export default isLoggedOut
