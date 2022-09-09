import * as api from '../../api/Woman/trousers';


export const getClothesActWomanTrousers = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL_WOMAN_TROUSERS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActWomanTrousers = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE_WOMAN_TROUSERS", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActWomanTrousers = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE_WOMAN_TROUSERS', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActWomanTrousers = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_WOMAN_TROUSERS', payload:id})
  }

  catch(error){
     console.log(error);
  }
}