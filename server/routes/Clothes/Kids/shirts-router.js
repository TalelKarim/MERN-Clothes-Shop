import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/kids/Shirts.js';
import Multer from '../../../middlewares/multer-config.js';
const router = express.Router();

router.get('/kids/shirts',getAllClothes);
router.post('/kids/shirts',postClothe);
router.put('/kids/shirts/:id',updateClothe);
router.delete('/kids/shirts/:id',deleteClothe)


export default router;
