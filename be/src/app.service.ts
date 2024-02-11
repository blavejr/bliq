import { Injectable } from '@nestjs/common';
import { BoltService } from './bolt/bolt.service';
import { UberService } from './uber/uber.service';
import { TaxiAppService } from './taxi-app/taxi-app.service';
import { ShareNowService } from './share-now/share-now.service';
import { IRide, PaginatedResult } from './interfaces/bliq.interface';
import { BliqUtils } from './utils/bliq';


@Injectable()
export class AppService {
  constructor(
    private readonly boltService: BoltService,
    private readonly uberService: UberService,
    private readonly taxiAppService: TaxiAppService,
    private readonly shareNowService: ShareNowService,
    private readonly bliqUtils: BliqUtils,
  ) {}

  public getHello(): string {
    return 'Hello World!';
  }

  public getAllRides(): PaginatedResult<IRide> {
    const allRides = [
      ...this.boltService.rides(),
      ...this.uberService.rides(),
      ...this.taxiAppService.rides(),
      ...this.shareNowService.rides(),
    ];
    return this.bliqUtils.paginate(allRides);
  }

  public getBliqRides(
    page: number = 1,
    limit: number = 10,
  ): PaginatedResult<IRide> {
    const allRides = [
      ...this.boltService.rides(),
      ...this.uberService.rides(),
      ...this.taxiAppService.rides(),
      ...this.shareNowService.rides(),
    ];    
    return this.bliqUtils.paginate(allRides, page, limit);
  }

}
