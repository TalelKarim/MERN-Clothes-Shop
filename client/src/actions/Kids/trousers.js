import * as api from '../../api/kids/trousers';


export const getClothesActKidsTrousers = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL_KIDS_TROUSERS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActKidsTrousers = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE_KIDS_TROUSERS", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActKidsTrousers = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE_KIDS_TROUSERS', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActKidsTrousers = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_KIDS_TROUSERS', payload:id})
  }

  catch(error){
     console.log(error);
  }
}
