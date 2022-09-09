
export default (kids_trousers = [], action) => {
  switch(action.type){
      case 'FETCH_ALL_KIDS_TROUSERS':
          return action.payload;

      case 'CREATE_KIDS_TROUSERS':
          return [...kids_trousers.data, action.payload];
      
      case 'UPDATE_KIDS_TROUSERS': 
          return kids_trousers.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_KIDS_TROUSERS':
          return kids_trousers.filter((item) =>item._id !== action.payload)    
      default:
          return kids_trousers ;
  }
     

}