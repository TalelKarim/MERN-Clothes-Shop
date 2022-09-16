import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/kids/Trousers.js';
import Multer from '../../../middlewares/multer-config.js';

const router = express.Router();

router.get('/kids/trousers',getAllClothes);
router.post('/kids/trousers' , Multer, postClothe);
router.put('/kids/trousers/:id', Multer,updateClothe);
router.delete('/kids/trousers/:id',deleteClothe)


export default router;
