import express  from "express";
import mongoose from "mongoose";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../controllers/Clothes.js';
const router = express.Router();

router.get('/',getAllClothes);
router.post('/',postClothe);
router.patch('/:id',updateClothe);
router.delete('/:id',deleteClothe)


export default router;
