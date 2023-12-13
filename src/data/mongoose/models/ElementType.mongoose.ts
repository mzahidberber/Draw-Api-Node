import { Document, Schema, model } from "mongoose";
import { ObjectId } from "mongodb";
import { ElementType } from "../../../core/models/concrete/ElementType";

const elementTypeSchema=new Schema({
    Name: {type:String,required:true},
    createdAt: {type:Date,default:Date.now,required:true},
    updatedAt: {type:Date,default:Date.now,required:true}
},{
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

export const MElementTypeModel = model<ElementType>('ElementType',elementTypeSchema)

