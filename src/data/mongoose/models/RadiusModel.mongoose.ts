import { Document, Schema, model } from "mongoose";
import { ObjectId } from "mongodb";
import { Radius } from "../../../core/models/concrete/Radius";

const radiusSchema=new Schema({
    Value: {type:Number,required:true},
    Element: {type:ObjectId,ref:'Element',required:true},
    createdAt: {type:Date,default:Date.now,required:true},
    updatedAt: {type:Date,default:Date.now,required:true},
    UserId: {type:String,required:true},
},{
    timestamps: true,
    versionKey: false,
    id: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })

export const MRadiusModel = model<Radius>('Radius',radiusSchema)

