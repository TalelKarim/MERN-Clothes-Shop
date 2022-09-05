import mongoose from "mongoose";

const clotheSchema = mongoose.Schema({
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

    rating:{
        type:Number,
        required: true
    },

    Likes:{
        type:Number,
        required: false 
    }


})


export default mongoose.model('Clothe', clotheSchema);