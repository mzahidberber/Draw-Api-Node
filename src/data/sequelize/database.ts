const { Sequelize } = require('sequelize')
import { Config } from 'sequelize/types'
import * as path from 'path'

const env = process.env.NODE_ENV || 'development'
const config: Config = require(path.join(__dirname, '../../../config.json'))[env]

const sequelize = new Sequelize(config.database, config.username,config.password, config)
import './models/ModelsInit' // initialize models



sequelize
  // .sync({force:true})
  .sync()
  .then()
  .catch((err:any)=>{
      console.error(err)
  })

export { sequelize }