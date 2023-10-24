import './data/sequelize/database'
import "reflect-metadata";
import container from './data/dependencyresolvers/dataInstanceFactory.config'
import { IElementRepository } from './data/repository/abstract/IElementRepository'
import TYPES from './data/dependencyresolvers/data-types'
import { IPointRepository } from './data/repository/abstract/IPointRepository';
import Element from './core/models/concrete/Element'
import Point from './core/models/concrete/Point';
import { ILayerRepository } from './data/repository/abstract/ILayerRepository';
import Layer from './core/models/concrete/Layer';


const r= container.get<ILayerRepository>(TYPES.LayerRepository)
r.GetAllWithElementsAsync().then(data=>{
    console.log(data)
}).catch()

// r.GetWhereAsync({})
// r.GetByIdAsync(1)
// let e = new Element()
// e.id=4
// r.AddAsync([
//     e
// ])


// const r1= container.get<IPointRepository>(TYPES.PointRepository)
// r1.GetAllAsync().then(r=>{
//     r.forEach(p=>{
//         console.log(p)
//     })
// }).catch()


// let p=new Point()
// p.ElementId=1

// r1.AddAsync([
//     p
// ])





