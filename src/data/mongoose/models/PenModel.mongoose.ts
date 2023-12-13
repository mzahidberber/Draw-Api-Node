import { Document, Schema, model } from "mongoose";
import { ObjectId } from "mongodb";
import { Pen } from "../../../core/models/concrete/Pen";

const penSchema=new Schema({
    Name: {type:String,required:true},
    Red: {type:Number,required:true},
    Blue: {type:Number,required:true},
    Green: {type:Number,required:true},
    UserId: {type:String,required:true},
    PenStyle: {type:ObjectId,ref:'PenStyle',required:true},
    createdAt: {type:Date,default:Date.now,required:true},
    updatedAt: {type:Date,default:Date.now,required:true}
},{
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

export const MPenModel = model<Pen>('Pen',penSchema)

