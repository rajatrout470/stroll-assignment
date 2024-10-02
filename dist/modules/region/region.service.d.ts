import { Repository } from 'typeorm';
import { Region } from './region.entity';
export declare class RegionService {
    private regionRepository;
    constructor(regionRepository: Repository<Region>);
    createRegion(region: any): Promise<any>;
}
