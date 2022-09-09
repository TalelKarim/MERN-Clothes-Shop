import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Man/s-shoes.js';
import Multer from '../../../middlewares/multer-config.js';

const router = express.Router();

router.get('/man/sshoes',getAllClothes);
router.post('/man/sshoes',postClothe);
router.put('/man/sshoes/:id',updateClothe);
router.delete('/man/sshoes/:id',deleteClothe)


export default router;
