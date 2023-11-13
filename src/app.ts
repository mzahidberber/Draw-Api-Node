import './data/sequelize/database'
import "reflect-metadata";
import express from 'express';
import { DrawRouter } from './api/routes/Draw.routes';
import { AutorizeUser } from './api/jwt/AutorizeUser';
import { LayerRouter } from './api/routes/Layer.routes';
import { ElementRouter } from './api/routes/Element.routes';
import { PointRouter } from './api/routes/Point.routes';
import { RadiusRouter } from './api/routes/Radius.routes';
import { SSAngleRouter } from './api/routes/SSAngle.routes';
import { logger } from './core/crosscuttingconcers/logging/winston/Logger';

declare global {
  namespace Express {
    interface Request {
      user:AutorizeUser
    }
  }
}

const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use("/",(req,rest,next)=>{
    req.user =new AutorizeUser()
    next()
})

app.use("/draw",new DrawRouter().router)
app.use("/layer",new LayerRouter().router)
app.use("/element",new ElementRouter().router)
app.use("/point",new PointRouter().router)
app.use("/radius",new RadiusRouter().router)
app.use("/ssangle",new SSAngleRouter().router)

app.listen(3000,()=>{
    logger.info("start app")
})
