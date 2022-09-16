import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Woman/Shirts.js';
import Multer from '../../../middlewares/multer-config.js';

const router = express.Router();

router.get('/woman/shirts',getAllClothes);
router.post('/woman/shirts',Multer,postClothe);
router.put('/woman/shirts/:id',Multer,updateClothe);
router.delete('/woman/shirts/:id',deleteClothe)


export default router;
