export const addEntry = (name, email) => ({
  type: 'ADD_ENTRY',
  name, email
})

export const delEntry = id => ({
  type: 'DEL_ENTRY', id
})

export const switchMode = id => ({
  type: 'SWITCH_MODE', id
})

export const editEntry = (id, name, email) => ({
  type: 'EDIT_ENTRY',
  id, name, email
})
