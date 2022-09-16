import * as api from '../../api/Kids/shirts';


export const getClothesActKidsShirts = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL_KIDS_SHIRTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActKidsShirts = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE_KIDS_SHIRTS", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActKidsShirts = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE_KIDS_SHIRTS', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActKidsShirts = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_KIDS_SHIRTS', payload:id})
  }

  catch(error){
     console.log(error);
  }
}