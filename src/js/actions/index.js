export const addEntry = person => ({
  type: 'ADD_ENTRY', person
})

export const delEntry = key => ({
  type: 'DEL_ENTRY', key
})

export const editEntry = (key, person) => ({
  type: 'EDIT_ENTRY', key, person
})

export const updateList = () => ({
  type: 'UPDATE_LIST'
})

export const writeToState = list => ({
  type: 'WRITE_TO_STATE', list
})

export const login = (email, pw) => ({
  type: "LOGIN", email, pw
})

export const logout = () =>({
  type: 'LOGOUT'
})

export const isSigningUp = (bool) => ({
  type: 'IS_SIGNING_UP', bool
})

export const signUp =(email, pw) => ({
  type: "SIGNUP", email, pw
})

export const checkIfLoggedOut = () =>({
  type: 'CHECKIFLOGGEDOUT'
})

export const fetchUID = () => ({
  type: 'FETCHUID'
})

export const loginSuccess = () => ({
  type: 'LOGINSUCCESS'
})

export const loginError = () => ({
  type: 'LOGINERROR'
})

export const deleteProfile = () => ({
  type: 'DELETEPROFILE'
})
