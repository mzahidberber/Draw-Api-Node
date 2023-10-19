import { Container } from "inversify"
import "reflect-metadata";
import { IElementRepository } from "../../core/data/abstract/IElementRepository";
import ElementRepository from "../repository/concrete/ElementRepository";
import TYPES from './types'



const container = new Container()
container.bind<IElementRepository>(TYPES.ElementRepository).to(ElementRepository)

export default container;