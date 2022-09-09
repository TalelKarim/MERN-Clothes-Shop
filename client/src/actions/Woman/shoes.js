import * as api from '../../api/Woman/shoes.js';


export const getClothesActWomanShoes = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL_WOMAN_SHOES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActWomanShoes = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE_WOMAN_SHOES", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActWomanShoes = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE_WOMAN_SHOES', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActWomanShoes = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_WOMAN_SHOES', payload:id})
  }

  catch(error){
     console.log(error);
  }
}