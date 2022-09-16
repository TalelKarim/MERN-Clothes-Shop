import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Man/F-shoes.js';
import Multer from '../../../middlewares/multer-config.js';

const router = express.Router();

router.get('/man/fshoes',getAllClothes);
router.post('/man/fshoes',Multer, postClothe);
router.put('/man/fshoes/:id',Multer, updateClothe);
router.delete('/man/fshoes/:id',deleteClothe)


export default router;
