const loginAttemptStatus = (error = false, action) =>{
  switch(action.type){
    case "LOGINERROR":
    return true

    case "LOGINSUCCESS":
    return false

    default:
    return error
  }
}

export default loginAttemptStatus
