const nameList = (state = [], action) => {
  switch(action.type){
    case 'ADD_ENTRY':
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
          email: action.email,
          mode: false
        }
      ]

    case 'DEL_ENTRY':
      state.splice(action.id, 1)
      for(let i =action.id; i<state.length; i++){
        state[i].id -=1;
      }
      return state

    case 'SWITCH_MODE':
      state[action.id].mode = !state[action.id].mode
      return state

    case 'EDIT_ENTRY':
      if(state[action.id].mode){
        state[action.id].name = action.name;
        state[action.id].email = action.email;
        return state
      }
      return state

    default:
      return state
  }
}

export default nameList
