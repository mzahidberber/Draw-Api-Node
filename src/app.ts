import './data/sequelize/database'
import "reflect-metadata";
import container from './data/dependencyresolvers/dataInstanceFactory.config'
import ElementRepository from './data/repository/concrete/ElementRepository'
import PointRepository from './data/repository/concrete/PointRepository'
import { IElementRepository } from './core/data/abstract/IElementRepository'
import TYPES from './data/dependencyresolvers/types'


const r= container.get<IElementRepository>(TYPES.ElementRepository)
r.GetAllAsync().then().catch()


// r.GetAllAsync().then(e=>{

// })

// let a=new PointRepository()
// a.GetAllAsync().then(e=>{
    
// })

