const isSigningUp = (state = false, action) => {
  switch(action.type){
    case 'IS_SIGNING_UP':
    return action.bool

    default:
    return state
  }
}

export default isSigningUp
