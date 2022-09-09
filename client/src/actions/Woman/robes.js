import * as api from '../../api/Woman/robes.js';


export const getClothesActRobes= () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActRobes = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActRobes = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActRobes = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_ROBES', payload:id})
  }

  catch(error){
     console.log(error);
  }
}