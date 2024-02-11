import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { BoltService } from './bolt/bolt.service';
import { UberService } from './uber/uber.service';
import { ShareNowService } from './share-now/share-now.service';
import { TaxiAppService } from './taxi-app/taxi-app.service';
import { IRide, PaginatedResult } from './interfaces/bliq.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly boltService: BoltService,
    private readonly uberService: UberService,
    private readonly shareNowService: ShareNowService,
    private readonly taxiAppService: TaxiAppService,
    ) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bolt')
  @HttpCode(200)
  getBolts(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10): PaginatedResult<IRide> {
    return this.boltService.getRides(page, limit);
  }

  @Get('/uber')
  @HttpCode(200)
  getUbers(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10): PaginatedResult<IRide> {
    return this.uberService.getRides(page, limit);
  }

  @Get('/share-now')
  @HttpCode(200)
  getShareNows(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10): PaginatedResult<IRide> {
    return this.shareNowService.getRides(page, limit);
  }

  @Get('/taxi-app')
  @HttpCode(200)
  getTaxis(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10): PaginatedResult<IRide> {
    return this.taxiAppService.getRides(page, limit);
  }

  @Get('/all-rides')
  @HttpCode(200)
  getAllRides(): PaginatedResult<IRide>  {
    return this.appService.getAllRides();
  }

  @Get('/rides')
  @HttpCode(200)
  getBliqRides(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10): PaginatedResult<IRide> {
    return this.appService.getBliqRides(page, limit);
  }

  @Get('/throw-error')
  throwError(): string {
    throw new Error('This is a test error');
  }
}
