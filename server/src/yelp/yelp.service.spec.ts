import { Test, TestingModule } from '@nestjs/testing';
import { YelpService } from './yelp.service';

describe('YelpService', () => {
  let service: YelpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YelpService],
    }).compile();

    service = module.get<YelpService>(YelpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
