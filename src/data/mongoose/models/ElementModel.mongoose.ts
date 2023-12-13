import { Document, Schema, model } from "mongoose";
import { ObjectId } from "mongodb";
import { Element } from "../../../core/models/concrete/Element";

const elementSchema=new Schema({
    Layer: {type:ObjectId,ref:'Layer',required:true},
    Pen: {type:ObjectId,ref:'Pen',required:true},
    ElementType: {type:ObjectId,ref:'ElementType',required:true},
    UserId: {type:String,required:true},
    createdAt: {type:Date,default:Date.now,required:true},
    updatedAt: {type:Date,default:Date.now,required:true}
},{
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

export const MElementModel = model<Element>('Element',elementSchema)

