import { Document, Schema, model } from "mongoose";
import { ObjectId } from "mongodb";
import { Point } from "../../../core/models/concrete/Point";

const pointSchema=new Schema({
    X: {type:Number,required:true},
    Y: {type:Number,required:true},
    Element: {type:ObjectId,ref:'Element',required:true},
    PointType: {type:ObjectId,ref:'PointType',required:true},
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

export const MPointModel = model<Point>('Point',pointSchema)

