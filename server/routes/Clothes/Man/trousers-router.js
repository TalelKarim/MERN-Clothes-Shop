import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Man/Trousers.js';
const router = express.Router();

router.get('/man/trousers',getAllClothes);
router.post('/man/trousers',postClothe);
router.put('/man/trousers/:id',updateClothe);
router.delete('/man/trousers/:id',deleteClothe)


export default router;
