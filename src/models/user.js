import mongoose, {mongo, Schema} from "mongoose";
import { unique } from "next/dist/build/utils";


const userSchema=new Schema(
    {
        clerkId: { 
            type: String,
            required: true,
            unique: true
        },
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true,
        },

        investoLevel:{
            type: String,
            default: 'Bronze'
        },

        totalShares:{
            type: Number,
            default: 0
        },
        
    },
    {
        timestamps: true
    }
)


export default User= mongoose.model('User', userSchema)