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
import { RedisCache } from './core/crosscuttingconcers/caching/redis/Redis.cache';
import { GeoService } from './core/services/GeoService/GeoService';
import { Environment } from './core/environment/Environment';

declare global {
  namespace Express {
    interface Request {
      user:AutorizeUser
    }
  }
}
Environment.getInstance()

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

app.listen(Environment.PORT,()=>{
    logger.info(`start app port: ${Environment.PORT} environment : ${Environment.NODE_ENV}`)
})

// const redis=new RedisCache()
// redis.addAsync("a",Number(true))
// redis.addAsync("aasd","deneme123")
// redis.getAsync("a123").then(e=>{
//   console.log(e)
// })


// GeoService.findLengthLineAsync({X:0,Y:0,Z:0},{X:10,Y:0,Z:0}).then((e)=>{
//   console.log(e)
// })

// GeoService.findCenterAndRadiusAsync({X:10,Y:0,Z:1},{X:8,Y:8,Z:1},{X:0,Y:10,Z:1}).then((e)=>{
//   console.log(e)
// })

// GeoService.findToSlopeLineAsync({X:10,Y:0,Z:1},{X:8,Y:8,Z:1}).then((e)=>{
//   console.log(e)
// })

// GeoService.findPointOnCircleAsync({
//   X:-87.5023,
//   Y:27.2857,
//   Z:1
//   },15,45).then((e)=>{
//   console.log(e)
// })
