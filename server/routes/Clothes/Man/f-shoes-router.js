import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Man/F-shoes.js';
const router = express.Router();

router.get('/man/fshoes',getAllClothes);
router.post('/man/fshoes',postClothe);
router.put('/man/fshoes/:id',updateClothe);
router.delete('/man/fshoes/:id',deleteClothe)


export default router;
