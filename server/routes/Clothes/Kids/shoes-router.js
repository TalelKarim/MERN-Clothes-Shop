import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/kids/Shoes.js';
import Multer from '../../../middlewares/multer-config.js';

const router = express.Router();

router.get('/kids/shoes',getAllClothes);
router.post('/kids/shoes',postClothe);
router.put('/kids/shoes/:id',updateClothe);
router.delete('/kids/shoes/:id',deleteClothe)


export default router;
