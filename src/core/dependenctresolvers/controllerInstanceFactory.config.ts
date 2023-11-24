import { Container } from "inversify"
import "reflect-metadata";
import { ICache } from "../crosscuttingconcers/caching/abstract/ICache";
import { RedisCache } from "../crosscuttingconcers/caching/redis/Redis.cache";

export const CoreTypes = {
    ICache: Symbol("ICache"),

    IConnect:Symbol("IConnect")
}

export const CoreContainer = new Container()


CoreContainer.bind<ICache>(CoreTypes.ICache).to(RedisCache).inSingletonScope()


