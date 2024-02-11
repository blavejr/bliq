export type IRide = {
    id: number;
    provider: IProvider;
    car: ICar;
    driver: IDriver;
    price: IPrice;
    duration: number;
  }
  
  export interface ICar {
    make: string;
    model: string;
    img: string;
    year: number;
  }
  
  export interface IDriver {
    name: string;
    img: string;
    rating: number;
  }
  
  export interface IPrice {
    lowPrice: number;
    highPrice: number;
    averagePrice: number;
  }
  
  export interface IProvider {
    name: "bolt" | "uber" | "taxiApp" | "shareNow";
  }

export interface IRidesResponse<T> {
    data: T[];
    count: number;
    averagePrice: number;
    currentPage: number;
    totalPages: number;
    totalItems: number;
  }

