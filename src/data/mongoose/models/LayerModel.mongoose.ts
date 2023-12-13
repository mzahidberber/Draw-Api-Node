import { Document, Schema, model } from "mongoose";
import { Layer } from "../../../core/models/concrete/Layer";
import { ObjectId } from "mongodb";

export const layerSchema=new Schema({
    Name: {type:String,required:true},
    Lock: {type:Boolean,required:true},
    Visibility: {type:Boolean,required:true},
    Thickness: {type:Number,required:true},
    NumberOfElements:{type:Number,default:0},
    UserId: {type:String,required:true},
    Draw:{
        type:ObjectId,
        ref:'Draw'
    },
    createdAt: {type:Date,default:Date.now,required:true},
    updatedAt: {type:Date,default:Date.now,required:true}
},{
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

export const MLayerModel = model<Layer>('Layer',layerSchema)

