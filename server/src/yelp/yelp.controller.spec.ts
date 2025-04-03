import { Test, TestingModule } from '@nestjs/testing';
import { YelpController } from './yelp.controller';

describe('YelpController', () => {
  let controller: YelpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YelpController],
    }).compile();

    controller = module.get<YelpController>(YelpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
