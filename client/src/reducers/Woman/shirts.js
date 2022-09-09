
export default (woman_shirts = [], action) => {
  switch(action.type){
      case 'FETCH_ALL_WOMAN_SHIRTS':
          return action.payload;

      case 'CREATE_WOMAN_SHIRTS':
          return [...woman_shirts.data, action.payload];
      
      case 'UPDATE_WOMAN_SHIRTS': 
          return woman_shirts.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_WOMAN_SHIRTS':
          return woman_shirts.filter((item) =>item._id !== action.payload)    
      default:
          return woman_shirts ;
  }
     

}