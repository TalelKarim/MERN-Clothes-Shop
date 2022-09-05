import * as api from '../api/index.js';


export const getClothesAct = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesAct = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostAct = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesAct = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE', payload:id})
  }

  catch(error){
     console.log(error);
  }
}