import { RegionService } from './region.service';
export declare class RegionController {
    private readonly regionService;
    constructor(regionService: RegionService);
    createRegion(region: any): Promise<any>;
}
