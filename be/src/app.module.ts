import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BliqUtils } from './utils/bliq';
import { BoltService } from './bolt/bolt.service';
import { UberService } from './uber/uber.service';
import { ShareNowService } from './share-now/share-now.service';
import { TaxiAppService } from './taxi-app/taxi-app.service';
import { ExceptionsFilter } from './exceptions/exceptions.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    BliqUtils,
    BoltService,
    UberService,
    ShareNowService,
    TaxiAppService,
    {
      provide: APP_FILTER,
      useClass: ExceptionsFilter,
    },
  ],
})
export class AppModule {}
