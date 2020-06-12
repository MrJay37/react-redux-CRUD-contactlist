const nameList = (state = [], action) => {
  switch(action.type){
    case 'WRITE_TO_STATE':
      if(action.list !== null){
        return Object.values(action.list)}
      else{
      return []
      }

    default:
      return state
  }
}

export default nameList
