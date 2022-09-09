import axios from 'axios';

//Man

   // Shirts

   const url = 'http://localhost:5000/kids/shoes';


   export const fetchClothes = () => axios.get(url);

   export const createClothes = (newClothes) => axios.post(url, newClothes) 
   export const updateClothes = (id, updatedClothes) => {
       axios.patch(`${url}/${id}`, updatedClothes);
   }

   export const deleteClothes = (id) => axios.delete(`${url}/${id}`);
