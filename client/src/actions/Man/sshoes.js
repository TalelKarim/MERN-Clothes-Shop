import * as api from '../../api/Man/sshoes';


export const getClothesActSshoes = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchClothes();
    dispatch({ type: "FETCH_ALL_SSHOES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createClothesActSshoes = (clothes) => async (dispatch) => {
  try {
    const { data } =  await api.createClothes(clothes);
    dispatch({ type: "CREATE_SSHOES", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatedPostActSshoes = (id, clothes) => async(dispatch) => {
  try{
      const  {data} =  await api.updateClothes(id,clothes);
      dispatch({type: 'UPDATE_SSHOES', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteClothesActSshoes = (id) => async (dispatch) => {
  try{
        await api.deleteClothes(id);

        dispatch({type:'DELETE_SSHOES', payload:id})
  }

  catch(error){
     console.log(error);
  }
}