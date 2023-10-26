import './data/sequelize/database'
import "reflect-metadata";
import DataContainer from './data/dependencyresolvers/dataInstanceFactory.config';
import DataTypes from './data/dependencyresolvers/DataTypes'
import { IPointRepository } from './data/repository/abstract/IPointRepository';
import Element from './core/models/concrete/Element'
import Point from './core/models/concrete/Point';
import { ILayerRepository } from './data/repository/abstract/ILayerRepository';
import Layer from './core/models/concrete/Layer';
import { createMap } from '@automapper/core';
import { dataMapper } from './data/mapper/dataMapper';
import LayerModel from './data/sequelize/models/LayerModel';
import { IElementRepository } from './data/repository/abstract/IElementRepository';




const r = DataContainer.get<ILayerRepository>(DataTypes.LayerRepository)
// r.GetAllAsync().then(data => {
//     console.log(data)
// }).catch()
// r.GetAllWithElementsAsync().then(data => {
//     console.log(data)
// }).catch()

const r1 = DataContainer.get<IElementRepository>(DataTypes.ElementRepository)
r1.GetAllWithPointsAsync().then(data => {
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





