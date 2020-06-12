const uid = (id = null, action) => {
  switch(action.type){
    case 'WRITE_TO_STATE':
      if(action.list !== null){
      return Object.keys(action.list)}
      return id

    default:
    return id;
  }}


export default uid
