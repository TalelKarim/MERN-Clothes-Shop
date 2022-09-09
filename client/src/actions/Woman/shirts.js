import * as api from '../../api/Woman/shirts';


export const getClothesActWomanShirts = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL_WOMAN_SHIRTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActWomanShirts = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE_WOMAN_SHIRTS", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActWomanShirts = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE_WOMAN_SHIRTS', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActWomanShirts = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_WOMAN_SHIRTS', payload:id})
  }

  catch(error){
     console.log(error);
  }
}