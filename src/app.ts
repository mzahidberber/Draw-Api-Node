import './data/sequelize/database'
import "reflect-metadata";
import express from 'express';
import { DrawRouter } from './api/routes/Draw.routes';
import { AutorizeUser } from './api/jwt/AutorizeUser';
import { LayerRouter } from './api/routes/Layer.routes';
import { ElementRouter } from './api/routes/Element.routes';

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

app.listen(3000,()=>{
    console.log("start app")
})
