import ElementModel from './ElementModel'
import PointModel from './PointModel'

PointModel.belongsTo(ElementModel,{
    foreignKey:{
        allowNull:false
    }
})
ElementModel.hasMany(PointModel)

