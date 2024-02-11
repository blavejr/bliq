import { Injectable } from '@nestjs/common';
import { IRide, PaginatedResult } from 'src/interfaces/bliq.interface';

@Injectable()
export class BliqUtils {
  constructor() {}

  averageAllRides(allRides: Array<IRide>): number {
    const averagePrice =
      allRides.reduce((acc, ride) => acc + ride.price.averagePrice, 0) /
      allRides.length;
    return averagePrice;
  }

  paginate<T>(
    items: T[],
    page: number = 0,
    limit: number = 0,
  ): PaginatedResult<T> {
    // If page or limit is 0, return all items
    if (page === 0 || limit === 0) {
      return {
        data: items,
        averagePrice: this.averageAllRides(items as Array<IRide>),
        count: items.length,
        currentPage: 1,
        totalPages: 1,
        totalItems: items.length,
      };
    }
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedItems = items.slice(startIndex, endIndex);
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / limit);

    return {
      data: paginatedItems,
      averagePrice: this.averageAllRides(paginatedItems as Array<IRide>),
      count: paginatedItems.length,
      currentPage: page,
      totalPages,
      totalItems,
    };
  }
}
