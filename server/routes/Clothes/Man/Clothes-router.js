import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Man/Clothes.js';
const router = express.Router();

router.get('/',getAllClothes);
router.post('/',postClothe);
router.put('/:id',updateClothe);
router.delete('/:id',deleteClothe)


export default router;
