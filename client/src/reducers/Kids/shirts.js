
export default (kids_shirts = [], action) => {
  switch(action.type){
      case 'FETCH_ALL_KIDS_SHIRTS':
          return action.payload;

      case 'CREATE_KIDS_SHIRTS':
          return [...kids_shirts.data, action.payload];
      
      case 'UPDATE_KIDS_SHIRTS': 
          return kids_shirts.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_KIDS_SHIRTS':
          return kids_shirts.filter((item) =>item._id !== action.payload)    
      default:
          return kids_shirts ;
  }
     

}