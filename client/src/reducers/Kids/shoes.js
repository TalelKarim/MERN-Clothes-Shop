
export default (kids_shoes = [], action) => {
  switch(action.type){
      case 'FETCH_ALL_KIDS_SHOES':
          return action.payload;

      case 'CREATE_KIDS_SHOES':
          return [...kids_shoes.data, action.payload];
      
      case 'UPDATE_KIDS_SHOES': 
          return kids_shoes.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_KIDS_SHOES':
          return kids_shoes.filter((item) =>item._id !== action.payload)    
      default:
          return kids_shoes ;
  }
     

}