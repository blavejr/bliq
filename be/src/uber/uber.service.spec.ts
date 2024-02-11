import { Test, TestingModule } from '@nestjs/testing';
import { UberService } from './uber.service';
import { BliqUtils } from '../utils/bliq';
import rides from './rides';

describe('UberService', () => {
  let service: UberService;
  let bliqUtils: BliqUtils; // Mock BliqUtils

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UberService,
        {
          provide: BliqUtils,
          useValue: {
            paginate: jest.fn(), // Mock the paginate method
          },
        },
      ],
    }).compile();

    service = module.get<UberService>(UberService);
    bliqUtils = module.get<BliqUtils>(BliqUtils);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getRides', () => {
    it('should call bliqUtils.paginate with the correct arguments', () => {
      const page = 1;
      const limit = 10;
      service.getRides(page, limit);
      expect(bliqUtils.paginate).toHaveBeenCalledWith(expect.any(Array), page, limit);
    });

    it('should return the result of bliqUtils.paginate', () => {
      const page = 1;
      const limit = 10;
      const expected = { data: [], total: 0, totalPages: 0 }; // Adjust the expected value according to your paginate method implementation
      (bliqUtils.paginate as jest.Mock).mockReturnValueOnce(expected);
      const result = service.getRides(page, limit);
      expect(result).toEqual(expected);
    });
  });

  describe('rides', () => {
    it('should return rides data', () => {
      const result = service.rides();
      expect(result).toEqual(rides);
    });
  });
});
