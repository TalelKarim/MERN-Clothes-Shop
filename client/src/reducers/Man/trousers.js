
export default (man_trousers = [], action) => {
  switch(action.type){
      case 'FETCH_ALL_MAN_TROUSERS':
          return action.payload;

      case 'CREATE_MAN_TROUSERS':
          return [...man_trousers.data, action.payload];
      
      case 'UPDATE_MAN_TROUSERS': 
          return man_trousers.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_MAN_TROUSERS':
          return man_trousers.filter((item) =>item._id !== action.payload)    
      default:
          return man_trousers ;
  }
     

}