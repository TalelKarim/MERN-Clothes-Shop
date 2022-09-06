import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Woman/Trousers.js';
const router = express.Router();

router.get('/woman/trousers',getAllClothes);
router.post('/woman/trousers',postClothe);
router.put('/woman/trousers/:id',updateClothe);
router.delete('/woman/trousers/:id',deleteClothe)


export default router;
