
export default (woman_trousers= [], action) => {
  switch(action.type){
      case 'FETCH_ALL_WOMAN_TROUSERS':
          return action.payload;

      case 'CREATE_WOMAN_TROUSERS':
          return [...woman_trousers.data, action.payload];
      
      case 'UPDATE_WOMAN_TROUSERS': 
          return woman_trousers.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_WOMAN_TROUSERS':
          return woman_trousers.filter((item) =>item._id !== action.payload)    
      default:
          return woman_trousers ;
  }
     

}