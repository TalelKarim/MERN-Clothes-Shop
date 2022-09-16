import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Man/Clothes.js';
const router = express.Router();
import Multer from '../../../middlewares/multer-config.js';


router.get('/',getAllClothes);
router.post('/',Multer,postClothe);
router.put('/:id',Multer,updateClothe);
router.delete('/:id',deleteClothe)


export default router;
