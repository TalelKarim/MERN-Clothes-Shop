
export default (fshoes = [], action) => {
  switch(action.type){
      case 'FETCH_ALL_FSHOES':
          return action.payload;

      case 'CREATE_FSHOES':
          return [...fshoes.data, action.payload];
      
      case 'UPDATE_FSHOES': 
          return fshoes.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_FSHOES':
          return fshoes.filter((item) =>item._id !== action.payload)    
      default:
          return fshoes ;
  }
     

}