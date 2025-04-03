import { Controller, Get, Query } from '@nestjs/common';
import { YelpService } from './yelp.service';
import { SortOption } from '../types';

@Controller('api')
export class YelpController {
  constructor(private readonly yelpService: YelpService) {}

  @Get('offices')
  async getOffices() {
    return this.yelpService.getOffices();
  }

  @Get('boba-shops')
  async getBobaShops(
    @Query('location') location: string,
    @Query('sortBy') sortBy: SortOption = 'rating',
    @Query('offset') offset: number = 0,
  ) {
    return this.yelpService.searchBobaShops(location, sortBy, offset);
  }
}
