import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Man/Trousers.js';
import Multer from '../../../middlewares/multer-config.js';

const router = express.Router();

router.get('/man/trousers',getAllClothes);
router.post('/man/trousers',Multer, postClothe);
router.put('/man/trousers/:id', Multer ,updateClothe);
router.delete('/man/trousers/:id',deleteClothe)


export default router;
