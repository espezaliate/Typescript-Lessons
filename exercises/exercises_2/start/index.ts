/**

Ćwiczenie 2

Uzupełnij treść poniższych funkcji wraz z ich typowaniem. Pamiętaj o zmianie typowań `unknown`.
*/

interface Cars{
  model: string,
  brand: string,
  year: number,
}

const cars: Cars[] = [
  {
    model: 'Q7',
    brand: 'Audi',
    year: 2004,
  },
  {
    model: '320',
    brand: 'BMW',
    year: 1992,
  },
  {
    model: '6',
    brand: 'Mazda',
    year: 2018,
  },
];

function carsAfter2000(cars: Cars[]): Cars[] {
  return cars.filter((car) => car.year > 2000);
}

const newCars = carsAfter2000(cars);

function fetchCars(): Promise<Cars[]>{
  return Promise.resolve(cars)
}

