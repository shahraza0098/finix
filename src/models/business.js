import mongoose, { Schema } from "mongoose";


const BusinessSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    sector:String,
    totalShares:{
        type:Number,
        required:true
    },
    sharePrices:{
        type: Number,
        required:true
    },
},
{timestamps:true}
)


export default Business=mongoose.model('Business', BusinessSchema)