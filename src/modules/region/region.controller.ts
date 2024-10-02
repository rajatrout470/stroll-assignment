import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RegionService } from './region.service';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post()
  async createRegion(region) {
    return await this.regionService.createRegion(region);
  }
}
