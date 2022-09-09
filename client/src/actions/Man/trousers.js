import * as api from '../../api/Man/trousers';


export const getClothesActManTrousers = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL_MAN_TROUSERS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActManTrousers = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE_MAN_TROUSERS", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActManTrousers = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE_MAN_TROUSERS', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActManTrousers = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_MAN_TROUSERS', payload:id})
  }

  catch(error){
     console.log(error);
  }
}