
export default (clothes = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
  
        case 'CREATE':
            return [...clothes.data, action.payload];
        
        case 'UPDATE': 
            return clothes.map((item) => item._id === action.payload._id ? action.payload : item)    
        case 'DELETE':
            return clothes.filter((item) =>item._id !== action.payload)    
        default:
            return clothes ;
    }
       
  
  }