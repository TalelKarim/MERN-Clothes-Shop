import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Woman/Trousers.js';
import Multer from '../../../middlewares/multer-config.js';

const router = express.Router();

router.get('/woman/trousers',getAllClothes);
router.post('/woman/trousers',Multer,postClothe);
router.put('/woman/trousers/:id',Multer,updateClothe);
router.delete('/woman/trousers/:id',deleteClothe)


export default router;
