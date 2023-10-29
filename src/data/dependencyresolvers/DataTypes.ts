let DataTypes = {
    DrawRepository: Symbol("DrawRepository"),
    ElementRepository: Symbol("ElementRepository"),
    ElementTypeRepository: Symbol("ElementTypeRepository"),
    LayerRepository: Symbol("LayerRepository"),
    PenRepository: Symbol("PenRepository"),
    PenStyleRepository: Symbol("PenStyleRepository"),
    PointRepository: Symbol("PointRepository"),
    PointTypeRepository: Symbol("PointTypeRepository"),
    RadiusRepository: Symbol("RadiusRepository"),
    SSAngleRepository: Symbol("SSAngleRepository"),
    UserRepository: Symbol("UserRepository"),
    
    
    //sequalize models
    DrawModel: Symbol("DrawModel"),
    ElementModel: Symbol("ElementModel"),
    ElementTypeModel: Symbol("ElementTypeModel"),
    LayerModel: Symbol("LayerModel"),
    PenModel: Symbol("PenModel"),
    PenStyleModel: Symbol("PenStyleModel"),
    PointModel: Symbol("PointModel"),
    PointTypeModel: Symbol("PointTypeModel"),
    RadiusModel: Symbol("RadiusModel"),
    SSAngleModel: Symbol("SSAngleModel"),
    UserModel: Symbol("UserModel"),

    //models
    Draw:Symbol('Draw'),
    Element:Symbol('Element'),
    ElementType:Symbol('ElementType'),
    Layer:Symbol('Layer'),
    Pen:Symbol('Pen'),
    PenStyle:Symbol('PenStyle'),
    Point:Symbol('Point'),
    PointType:Symbol('PointType'),
    Radius:Symbol('Radius'),
    SSAngle:Symbol('SSAngle'),
    User:Symbol('User'),
    UserRefreshToken:Symbol('UserRefreshToken'),
    UserRole:Symbol('UserRole'),
    UserRoles:Symbol('UserRoles'),
};

export default DataTypes;