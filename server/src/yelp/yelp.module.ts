import { Module } from '@nestjs/common';
import { YelpService } from './yelp.service';
import { YelpController } from './yelp.controller';

@Module({
  providers: [YelpService],
  controllers: [YelpController],
  exports: [YelpService],
})
export class YelpModule {}
