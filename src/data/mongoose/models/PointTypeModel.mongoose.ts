import { Document, Schema, model } from "mongoose";
import { ObjectId } from "mongodb";
import { PointType } from "../../../core/models/concrete/PointType";

const pointtypeSchema=new Schema({
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

export const MPointTypeModel = model<PointType>('PointType',pointtypeSchema)

