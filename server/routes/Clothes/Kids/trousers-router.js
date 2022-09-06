import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/kids/Trousers.js';
const router = express.Router();

router.get('/kids/trousers',getAllClothes);
router.post('/kids/trousers',postClothe);
router.put('/kids/trousers/:id',updateClothe);
router.delete('/kids/trousers/:id',deleteClothe)


export default router;
