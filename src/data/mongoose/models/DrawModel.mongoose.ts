import { Document, Schema, model } from "mongoose";
import { Draw } from "../../../core/models/concrete/Draw";



const drawSchema=new Schema({
    // Id:{type:Number,require:true},
    Name: {type:String,required:true},
    // UserId: {type:String,require:true},
    // Layers: LayerModel[]=[],
    // NumberOfLayerElements:{type:Number,require:true},
    createdAt: {type:Date,default:Date.now},
    updatedAt: {type:Date,default:Date.now}
})


interface UserDocument extends Draw,Document{
}


export const MDrawModel = model<Draw>('Draw',drawSchema)

