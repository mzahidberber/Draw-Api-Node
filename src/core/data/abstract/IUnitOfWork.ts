

interface IUnitOfWork{
    CommitAsync(state:boolean):Promise<boolean>
}

export default IUnitOfWork