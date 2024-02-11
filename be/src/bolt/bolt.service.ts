import { Injectable } from '@nestjs/common';
import rides from './rides';
import { IRide, PaginatedResult } from '../interfaces/bliq.interface';
import { BliqUtils } from '../utils/bliq';

@Injectable()
export class BoltService {
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
