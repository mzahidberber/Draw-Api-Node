

export interface IUnitOfWork{
    CommitAsync(state:boolean):Promise<boolean>
}
