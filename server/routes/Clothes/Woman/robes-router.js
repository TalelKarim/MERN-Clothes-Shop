import express  from "express";
import {getAllClothes, postClothe, updateClothe, deleteClothe} from '../../../controllers/Clothes/Woman/Robes.js';
const router = express.Router();

router.get('/woman/robes',getAllClothes);
router.post('/woman/robes',postClothe);
router.put('/woman/robes/:id',updateClothe);
router.delete('/woman/robes/:id',deleteClothe)


export default router;
