import { Document, Schema, model } from "mongoose";
import { Draw } from "../../../core/models/concrete/Draw";
import { ObjectId } from "mongodb";



const drawSchema=new Schema({
    Name: {type:String,required:true},
    UserId: {type:String,required:true},
    NumberOfLayerElements:{type:Number,default:0},
    createdAt: {type:Date,default:Date.now,required:true},
    updatedAt: {type:Date,default:Date.now,required:true}
},{
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)




// interface UserDocument extends Draw,Document{
// }


export const MDrawModel = model<Draw>('Draw',drawSchema)

