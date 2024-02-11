import { Injectable } from '@nestjs/common';
import { IRide, PaginatedResult } from '../interfaces/bliq.interface';
import rides from './rides';
import { BliqUtils } from '../utils/bliq';

@Injectable()
export class UberService {

  constructor(
    private readonly bliqUtils: BliqUtils,
  ) {}

  getRides(page, limit): PaginatedResult<IRide> {
    return this.bliqUtils.paginate(rides, page, limit);
  }

  rides() {
    return rides;
  }
}
