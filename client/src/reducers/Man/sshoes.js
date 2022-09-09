
export default (sshoes = [], action) => {
  switch(action.type){
      case 'FETCH_ALL_SSHOES':
          return action.payload;

      case 'CREATE_SSHOES':
          return [...sshoes.data, action.payload];
      
      case 'UPDATE_SSHOES': 
          return sshoes.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_SSHOES':
          return sshoes.filter((item) =>item._id !== action.payload)    
      default:
          return sshoes ;
  }
     

}