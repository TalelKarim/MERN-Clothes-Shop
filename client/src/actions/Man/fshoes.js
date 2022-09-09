import * as api from '../../api/Man/fshoes';


export const getClothesActFshoes = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL_FSHOES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActFshoes = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE_FSHOES", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActFshoes = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE_FSHOES', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActFshoes = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_FSHOES', payload:id})
  }

  catch(error){
     console.log(error);
  }
}