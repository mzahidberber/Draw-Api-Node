import { Document, Schema, model } from "mongoose";
import { ObjectId } from "mongodb";
import { Radius } from "../../../core/models/concrete/Radius";
import { SSAngle } from "../../../core/models/concrete/SSAngle";

const ssangleSchema=new Schema({
    Value: {type:Number,required:true},
    Type: {type:String,required:true},
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

export const MSSAngleModel = model<SSAngle>('SSAngle',ssangleSchema)

