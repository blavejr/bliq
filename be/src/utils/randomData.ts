import {
  IRide,
  ICar,
  IDriver,
  IPrice,
  IProvider,
} from '../interfaces/bliq.interface';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

const cars: ICar[] = [
  {
    year: 2024,
    make: 'Toyota',
    model: 'Corolla',
    img: 'https://banner2.cleanpng.com/20180429/gue/kisspng-2017-toyota-corolla-2016-toyota-corolla-2014-toyot-5ae5fd75c8dfd7.3714659515250220698228.jpg',
  },
  {
    year: 2022,
    make: 'Toyota',
    model: 'Camry',
    img: 'https://banner2.cleanpng.com/20180702/gwe/kisspng-2018-toyota-camry-le-car-2018-toyota-camry-xle-201-toyota-2018-5b3add559ae5e1.2130675515305844056345.jpg',
  },
  {
    year: 2021,
    make: 'Toyota',
    model: 'Prius',
    img: 'https://banner2.cleanpng.com/20180622/ilx/kisspng-2018-toyota-prius-car-toyota-auris-toyota-camry-prius-c-5b2cbe57e18316.4168097215296589679237.jpg',
  },
  {
    year: 2023,
    make: 'Toyota',
    model: 'Rav4',
    img: 'https://p7.hiclipart.com/preview/346/293/293/2006-toyota-rav4-car-2011-toyota-rav4-2006-toyota-camry-toyota.jpg',
  },
  {
    year: 2024,
    make: 'Ford',
    model: 'Fiesta',
    img: 'https://banner2.cleanpng.com/20180329/kue/kisspng-2018-ford-fiesta-2017-ford-fiesta-ford-motor-compa-fiesta-5abd9da2932935.4362112615223760986028.jpg',
  },
  {
    year: 2022,
    make: 'Ford',
    model: 'Focus',
    img: 'https://banner2.cleanpng.com/20180605/wey/kisspng-2015-ford-focus-2014-ford-focus-car-2018-ford-focu-5b16beb4440554.8486557515282172682786.jpg',
  },
  {
    year: 2020,
    make: 'Ford',
    model: 'Mustang',
    img: 'https://banner2.cleanpng.com/20180705/fa/kisspng-2019-ford-mustang-ford-gt-ford-motor-company-shelb-mustang-2018-5b3ed655e40fe1.1059101715308447579342.jpg',
  },
  {
    year: 2021,
    make: 'Chevrolet',
    model: 'Escape',
    img: 'https://banner2.cleanpng.com/20180601/gju/kisspng-2018-ford-escape-ford-motor-company-ford-focus-201-ford-kuga-5b113376ac0309.5235996115278539427046.jpg',
  },
  {
    year: 2022,
    make: 'Chevrolet',
    model: 'Spark',
    img: 'https://banner2.cleanpng.com/20180327/caw/kisspng-2014-chevrolet-spark-2015-chevrolet-spark-2013-che-spark-5aba52273fad68.0995217315221601672608.jpg',
  },
  {
    year: 2023,
    make: 'Chevrolet',
    model: 'Cruze',
    img: 'https://banner2.cleanpng.com/20180529/qoj/kisspng-2012-chevrolet-cruze-general-motors-car-2011-chevr-5b0d588f0eca12.1947958315276012950606.jpg',
  },
  {
    year: 2024,
    make: 'Chevrolet',
    model: 'Malibu',
    img: 'https://cdn.imgbin.com/16/2/24/imgbin-2018-chevrolet-malibu-hybrid-general-motors-mid-size-car-chevrolet-NFzukSLfeZR3E29iGVhQAFVQx.jpg',
  },
  {
    year: 2020,
    make: 'Chevrolet',
    model: 'Equinox',
    img: 'https://banner2.cleanpng.com/20180330/dpw/kisspng-2018-chevrolet-equinox-suv-general-motors-car-comp-2018-5abdc8318946d9.3410299615223869935623.jpg',
  },
];

const drivers: IDriver[] = [
  {rating: 1,name: 'Johnny Walker', img: 'https://img.freepik.com/free-psd/person-celebrating-their-sexual-orientation_23-2150115662.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707436800&semt=ais'},
  {rating: 2,name: 'Jim Beam', img: 'https://i.pinimg.com/736x/ec/58/19/ec58198c3f652de85e735d918ef85dd8.jpg'},
  {rating: 3,name: 'Jameson Irish', img: 'https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png'},
  {rating: 4,name: 'Mike Johnson', img: 'https://cdn.imgbin.com/16/0/24/imgbin-white-people-photography-white-american-man-man-hNMxd0tiKxiG68nRchC08Rtde.jpg'},
  {rating: 5,name: 'Captain Morgan', img: 'https://p7.hiclipart.com/preview/213/211/731/uzi-league-of-legends-asian-games-cao-wei-league-of-legends.jpg'},
  {rating: 3,name: 'Jack Daniels', img: 'https://pngimg.com/d/face_PNG5650.png'},
  {rating: 2,name: 'Chivas Regal', img: 'https://i.pinimg.com/originals/d4/73/f3/d473f390ed78cc845580d8f4911cac3a.jpg'},
];

function generateRandomPrice(): IPrice {
  const lowPrice = getRandomInt(5, 20);
  const highPrice = getRandomInt(lowPrice + 5, lowPrice + 15);
  const averagePrice = (lowPrice + highPrice) / 2;
  return {
    lowPrice,
    highPrice,
    averagePrice,
  };
}

function generateRandomRide(provider: IProvider): IRide {
  return {
    id: getRandomInt(1, 1000),
    provider: provider,
    car: getRandomElement(cars),
    driver: getRandomElement(drivers),
    price: generateRandomPrice(),
    duration: getRandomInt(10, 60),
  };
}

export function generateRandomRides(
  numRides: number,
  provider: string,
): IRide[] {
  const rides: IRide[] = [];

  for (let i = 0; i < numRides; i++) {
    const ride = generateRandomRide({ name: provider as IProvider['name'] });
    rides.push(ride);
  }
  return rides;
}
