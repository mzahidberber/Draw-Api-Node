import { Router } from 'express';
import { DrawContoller } from '../controllers/Draw.controller';
import { ContollerTypes, ControllerContainer } from '../dependencyresolvers/controllerInstanceFactory.config';

export const drawRouter:Router=Router()

drawRouter.get('/draws/add',(req,res,next)=>{
    ControllerContainer.get<DrawContoller>(ContollerTypes.DrawController).AddDraws(req,res,next)
})

drawRouter.get('/draws',(req,res,next)=>{
    ControllerContainer.get<DrawContoller>(ContollerTypes.DrawController).GetDraws(req,res,next)
})
