import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoltService } from './bolt/bolt.service';
import { UberService } from './uber/uber.service';
import { ShareNowService } from './share-now/share-now.service';
import { TaxiAppService } from './taxi-app/taxi-app.service';
import { IRide, PaginatedResult } from './interfaces/bliq.interface';
import { BliqUtils } from './utils/bliq';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  let boltService: BoltService;
  let uberService: UberService;
  let shareNowService: ShareNowService;
  let taxiAppService: TaxiAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        BoltService,
        UberService,
        ShareNowService,
        TaxiAppService,
        BliqUtils,
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
    boltService = module.get<BoltService>(BoltService);
    uberService = module.get<UberService>(UberService);
    shareNowService = module.get<ShareNowService>(ShareNowService);
    taxiAppService = module.get<TaxiAppService>(TaxiAppService);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const result = appController.getHello();
      expect(result).toBe('Hello World!');
    });
  });

  describe('getBolts', () => {
    it('should call boltService.getRides with correct arguments', () => {
      const page = 1;
      const limit = 10;
      jest.spyOn(boltService, 'getRides').mockReturnValueOnce({ data: [], count: 0, totalPages: 0, averagePrice: 0, currentPage: 1, totalItems: 0});
      appController.getBolts(page, limit);
      expect(boltService.getRides).toHaveBeenCalledWith(page, limit);
    });
  });

  describe('getUbers', () => {
    it('should call uberService.getRides with correct arguments', () => {
      const page = 1;
      const limit = 10;
      jest.spyOn(uberService, 'getRides').mockReturnValueOnce({ data: [], count: 0, totalPages: 0, averagePrice: 0, currentPage: 1, totalItems: 0});
      appController.getUbers(page, limit);
      expect(uberService.getRides).toHaveBeenCalledWith(page, limit);
    });
  });

  describe('getShareNows', () => {
    it('should call shareNowService.getRides with correct arguments', () => {
      const page = 1;
      const limit = 10;
      jest.spyOn(shareNowService, 'getRides').mockReturnValueOnce({ data: [], count: 0, totalPages: 0, averagePrice: 0, currentPage: 1, totalItems: 0});
      appController.getShareNows(page, limit);
      expect(shareNowService.getRides).toHaveBeenCalledWith(page, limit);
    });
  });

  describe('getTaxis', () => {
    it('should call taxiAppService.getRides with correct arguments', () => {
      const page = 1;
      const limit = 10;
      jest.spyOn(taxiAppService, 'getRides').mockReturnValueOnce({ data: [], count: 0, totalPages: 0, averagePrice: 0, currentPage: 1, totalItems: 0});
      appController.getTaxis(page, limit);
      expect(taxiAppService.getRides).toHaveBeenCalledWith(page, limit);
    });
  });
});
