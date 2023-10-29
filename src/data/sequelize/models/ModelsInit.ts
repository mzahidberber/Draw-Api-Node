
import DrawModel from './DrawModel'
import ElementModel from './ElementModel'
import ElementTypeModel from './ElementTypeModel'
import LayerModel from './LayerModel'
import PenModel from './PenModel'
import PenStyleModel from './PenStyleModel'
import PointModel from './PointModel'
import PointTypeModel from './PointTypeModel'
import RadiusModel from './RadiusModel'
import SSAngleModel from './SSAngleModel'
import UserModel from './UserModel'

//draw

DrawModel.belongsTo(UserModel,{
    foreignKey:{
        allowNull:false
    }
})
UserModel.hasMany(DrawModel)

//Layers


LayerModel.belongsTo(DrawModel,{
    foreignKey:{
        allowNull:false
    }
})
DrawModel.hasMany(LayerModel)

LayerModel.belongsTo(PenModel,{
    foreignKey:{
        allowNull:false
    }
})
PenModel.hasMany(LayerModel)

//Pen

PenModel.belongsTo(PenStyleModel,{
    foreignKey:{
        allowNull:false
    }
})
PenStyleModel.hasMany(PenModel)

//element

ElementModel.belongsTo(LayerModel,{
    foreignKey:{
        allowNull:false
    }
})
LayerModel.hasMany(ElementModel)

ElementModel.belongsTo(PenModel,{
    foreignKey:{
        allowNull:false
    }
})
PenModel.hasMany(ElementModel)

ElementModel.belongsTo(ElementTypeModel,{
    foreignKey:{
        allowNull:false
    }
})
ElementTypeModel.hasMany(ElementModel)


//Point

PointModel.belongsTo(ElementModel,{
    foreignKey:{
        allowNull:false
    }
})
ElementModel.hasMany(PointModel)

PointModel.belongsTo(PointTypeModel,{
    foreignKey:{
        allowNull:false
    }
})
PointTypeModel.hasMany(PointModel)

// radius

RadiusModel.belongsTo(ElementModel,{
    foreignKey:{
        allowNull:false
    }
})
ElementModel.hasMany(RadiusModel)


//SSangle

SSAngleModel.belongsTo(ElementModel,{
    foreignKey:{
        allowNull:false
    }
})
ElementModel.hasMany(SSAngleModel)

