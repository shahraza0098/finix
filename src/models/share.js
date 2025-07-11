import mongoose, { Schema } from "mongoose";

const ShareSchema = new Schema({
    business:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Business',
    },
    priceAtPurchase:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:['OWNED', 'SOLD'],
        default:'OWNED'
    },

    quantity:{
        type:Number,
        default:1
    },
    portfolio:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Portfolio'
    },

},{timestamps:true})


export default  Share= mongoose.model('Share', ShareSchema)