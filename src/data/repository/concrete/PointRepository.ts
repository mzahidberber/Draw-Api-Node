
import {IElementRepository} from '../../../core/data/abstract/IElementRepository'
import Element from '../../../core/models/concrete/Element'

class PointRepository implements IElementRepository {
    GetAllAsync(): Promise<Element[]> {
        throw new Error('Method not implemented.')
    }
    GetWhereAsync(filter: {}): Promise<Element[]> {
        throw new Error('Method not implemented.')
    }
    GetByIdAsync(id: number): Promise<Element> {
        throw new Error('Method not implemented.')
    }
    AddAsync(entity: Element): Promise<void> {
        throw new Error('Method not implemented.')
    }
    Update(entity: Element): void {
        throw new Error('Method not implemented.')
    }
    Delete(entity: Element): void {
        throw new Error('Method not implemented.')
    }
    CommitAsync(state: boolean): Promise<boolean> {
        throw new Error('Method not implemented.')
    }
    
    
}

export default PointRepository