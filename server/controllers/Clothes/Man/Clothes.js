import express from 'express';
import mongoose from 'mongoose';
import clothes from '../../../models/clothes/man/clothes.js';

const router = express.Router();

export const getAllClothes =  (req, res, next) => { 
   clothes.find()
   .then((data) => {
       res.status(201).json(data)
   })
   .catch((err) => {
       console.log(err.stack)
   })
}


export const postClothe =  (req,res,next) => {
    const clothe= new clothes({
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

    });
    clothe.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => console.log(error.response) );
}


export const updateClothe =  (req,res,next) => {
    const {id : _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('No post with that id ')
    }
    clothes.updateOne({_id: req.params.id}, {
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
    clothes.deleteOne({_id: req.params.id})
    .then(() => {
        res.status(200).json({message:"Objet supprimé !"})
    })
    .catch(error => {
        res.status(400).json({error})
    })
}






export default router