import { createMap, createMapper } from "@automapper/core";
import { DrawDTO } from "../../core/dtos/concrete/DrawDTO";
import {Draw} from "../../core/models/concrete/Draw";
import { classes } from "@automapper/classes";


export const serviceMapper = createMapper({
    strategyInitializer:classes()
});

createMap(serviceMapper,Draw,DrawDTO)