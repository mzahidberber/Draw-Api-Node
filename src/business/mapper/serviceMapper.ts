import { createMap, createMapper } from "@automapper/core";
import { DrawDTO } from "../../core/dtos/concrete/DrawDTO";
import {Draw} from "../../core/models/concrete/Draw";
import { classes } from "@automapper/classes";
import { Element } from "../../core/models/concrete/Element";
import { ElementDTO } from "../../core/dtos/concrete/ElementDTO";
import { Layer } from "../../core/models/concrete/Layer";
import { LayerDTO } from "../../core/dtos/concrete/LayerDTO";


export const serviceMapper = createMapper({
    strategyInitializer:classes()
});

createMap(serviceMapper,Draw,DrawDTO)
createMap(serviceMapper,DrawDTO,Draw)
createMap(serviceMapper,Element,ElementDTO)
createMap(serviceMapper,ElementDTO,Element)

createMap(serviceMapper,Layer,LayerDTO)
createMap(serviceMapper,LayerDTO,Layer)