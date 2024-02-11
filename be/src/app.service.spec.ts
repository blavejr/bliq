import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { BoltService } from './bolt/bolt.service';
import { UberService } from './uber/uber.service';
import { TaxiAppService } from './taxi-app/taxi-app.service';
import { ShareNowService } from './share-now/share-now.service';
import { IRide, PaginatedResult } from './interfaces/bliq.interface';
import { BliqUtils } from './utils/bliq';

describe('AppService', () => {
  let appService: AppService;
  let boltService: BoltService;
  let uberService: UberService;
  let taxiAppService: TaxiAppService;
  let shareNowService: ShareNowService;
  let bliqUtils: BliqUtils;
  const mockRides: IRide[] = [
    {
      id: 769,
      provider: {
        name: 'bolt',
      },
      car: {
        year: 2021,
        make: 'Toyota',
        model: 'Prius',
        img: 'https://banner2.cleanpng.com/20180622/ilx/kisspng-2018-toyota-prius-car-toyota-auris-toyota-camry-prius-c-5b2cbe57e18316.4168097215296589679237.jpg',
      },
      driver: {
        rating: 1,
        name: 'Johnny Walker',
        img: 'https://img.freepik.com/free-psd/person-celebrating-their-sexual-orientation_23-2150115662.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais',
      },
      price: {
        lowPrice: 11,
        highPrice: 19,
        averagePrice: 15,
      },
      duration: 48,
    },
  ];

  const expectedResult: PaginatedResult<IRide> = {
    data: mockRides,
    count: mockRides.length,
    averagePrice: 0,
    currentPage: 1,
    totalItems: mockRides.length,
    totalPages: 1,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: BoltService,
          useValue: {
            rides: jest.fn(() => []),
          },
        },
        {
          provide: UberService,
          useValue: {
            rides: jest.fn(() => []),
          },
        },
        {
          provide: TaxiAppService,
          useValue: {
            rides: jest.fn(() => []),
          },
        },
        {
          provide: ShareNowService,
          useValue: {
            rides: jest.fn(() => []),
          },
        },
        {
          provide: BliqUtils,
          useValue: {
            paginate: jest.fn(),
          },
        },
      ],
    }).compile();

    appService = module.get<AppService>(AppService);
    boltService = module.get<BoltService>(BoltService);
    uberService = module.get<UberService>(UberService);
    taxiAppService = module.get<TaxiAppService>(TaxiAppService);
    shareNowService = module.get<ShareNowService>(ShareNowService);
    bliqUtils = module.get<BliqUtils>(BliqUtils);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const result = appService.getHello();
      expect(result).toBe('Hello World!');
    });
  });

  describe('getAllRides', () => {
    it('should call rides methods of all services and paginate the result', () => {
      (boltService.rides as jest.Mock).mockReturnValue(mockRides);
      (uberService.rides as jest.Mock).mockReturnValue(mockRides);
      (taxiAppService.rides as jest.Mock).mockReturnValue(mockRides);
      (shareNowService.rides as jest.Mock).mockReturnValue(mockRides);

      (bliqUtils.paginate as jest.Mock).mockReturnValue(expectedResult);

      const result = appService.getAllRides();
      expect(result).toEqual(expectedResult);
      expect(boltService.rides).toHaveBeenCalled();
      expect(uberService.rides).toHaveBeenCalled();
      expect(taxiAppService.rides).toHaveBeenCalled();
      expect(shareNowService.rides).toHaveBeenCalled();
      expect(bliqUtils.paginate).toHaveBeenCalled();
    });
  });

  describe('getBliqRides', () => {
    it('should call rides methods of all services, paginate the result and use provided page and limit', () => {
      (boltService.rides as jest.Mock).mockReturnValue(mockRides);
      (uberService.rides as jest.Mock).mockReturnValue(mockRides);
      (taxiAppService.rides as jest.Mock).mockReturnValue(mockRides);
      (shareNowService.rides as jest.Mock).mockReturnValue(mockRides);

      (bliqUtils.paginate as jest.Mock).mockReturnValue(expectedResult);

      const page = 2;
      const limit = 5;

      const result = appService.getBliqRides(page, limit);
      expect(result).toEqual(expectedResult);
      expect(boltService.rides).toHaveBeenCalled();
      expect(uberService.rides).toHaveBeenCalled();
      expect(taxiAppService.rides).toHaveBeenCalled();
      expect(shareNowService.rides).toHaveBeenCalled();
      expect(bliqUtils.paginate).toHaveBeenCalled();
    });
  });
});
