import DrawModel from './DrawModel'
import ElementModel from './ElementModel'
import LayerModel from './LayerModel'
import PointModel from './PointModel'
import UserModel from './UserModel'

DrawModel.belongsTo(UserModel,{
    foreignKey:{
        allowNull:false
    }
})
UserModel.hasMany(DrawModel)

LayerModel.belongsTo(DrawModel,{
    foreignKey:{
        allowNull:false
    }
})
DrawModel.hasMany(LayerModel)

ElementModel.belongsTo(LayerModel,{
    foreignKey:{
        allowNull:false
    }
})
LayerModel.hasMany(ElementModel)

PointModel.belongsTo(ElementModel,{
    foreignKey:{
        allowNull:false
    }
})
ElementModel.hasMany(PointModel)

