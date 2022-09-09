
export default (robes = [], action) => {
  switch(action.type){
      case 'FETCH_ALL_ROBES':
          return action.payload;

      case 'CREATE_ROBES':
          return [...robes.data, action.payload];
      
      case 'UPDATE_ROBES': 
          return robes.map((item) => item._id === action.payload._id ? action.payload : item)    
      case 'DELETE_ROBES':
          return robes.filter((item) =>item._id !== action.payload)    
      default:
          return robes ;
  }
     

}