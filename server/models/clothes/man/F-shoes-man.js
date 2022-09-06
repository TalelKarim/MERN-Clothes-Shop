import mongoose from "mongoose";

const FshoeSchema = mongoose.Schema({
    imageUrl :{
        type:String,
        required: false
    },
    
    name:{
       type:String,
       required: true
    },

    Size: {
        type: String,
        required: true
    }, 

    actualPrice:{
       type: String,
       required:true
    },

    oldPrice:{
        type:String,
        required: true
    },


    Likes:{
        type:Number,
        required: false 
    },

    info:{
        type:String,
        required:false
    },

    feedback:{
        type:String,
        required:false
    }


})


export default mongoose.model('FshoeMan', FshoeSchema);