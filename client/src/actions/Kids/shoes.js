import * as api from '../../api/Kids/shoes';


export const getClothesActKidsShoes = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL_KIDS_SHOES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActKidsShoes = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE_KIDS_SHOES", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActKidsShoes = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE_KIDS_SHOES', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActKidsShoes = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_KIDS_SHOES', payload:id})
  }

  catch(error){
     console.log(error);
  }
}