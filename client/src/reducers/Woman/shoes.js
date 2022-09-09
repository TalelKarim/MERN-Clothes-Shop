
export default (woman_shoes = [], action) => {
  switch(action.type){
      case 'FETCH_ALL_WOMAN_SHOES':
          return action.payload;

      case 'CREATE_WOMAN_SHOES':
          return [...woman_shoes.data, action.payload];
      
      case 'UPDATE_WOMAN_SHOES': 
          return woman_shoes.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_WOMAN_SHOES':
          return woman_shoes.filter((item) =>item._id !== action.payload)    
      default:
          return woman_shoes ;
  }
     

}