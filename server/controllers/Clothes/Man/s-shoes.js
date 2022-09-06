import express from 'express';
import mongoose from 'mongoose';
import SShoes from '../../../models/clothes/man/s-shoes-man.js';

const router = express.Router();

export const getAllClothes =  (req, res, next) => { 
   SShoes.find()
   .then((data) => {
       res.status(201).json(data)
   })
   .catch((err) => {
       console.log(err.stack)
   })
}


export const postClothe =  (req,res,next) => {
    const SShoe= new SShoes({
        ...req.body
    });
    SShoe.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => console.log(error.response) );
}


export const updateClothe =  (req,res,next) => {
    const {id : _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that id ')
    }
    SShoes.updateOne({_id: req.params.id}, {
        ...req.body, _id:req.params.id
    })
    .then(() => {
        res.status(200).json({message:'Objet Modifié !'})
    })
    .catch(error => {
        res.status(400).json({error})
    })
}


export const deleteClothe = (req,res,next) => {
    SShoes.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({message:"Objet supprimé !"})
    })
    .catch(error => {
        res.status(400).json({error})
    })
}






export default router