import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Woman/Shoes.js';
const router = express.Router();

router.get('/woman/shoes',getAllClothes);
router.post('/woman/shoes',postClothe);
router.put('/woman/shoes/:id',updateClothe);
router.delete('/woman/shoes/:id',deleteClothe)


export default router;
