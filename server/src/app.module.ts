import { Module } from '@nestjs/common';
import { YelpModule } from './yelp/yelp.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    YelpModule,
  ],
})
export class AppModule {}
