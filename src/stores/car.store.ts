import { makeAutoObservable } from "mobx";
import { CarModel } from "../../domain/models/car.model";

export class CarStore {
  static shared = new CarStore()

  constructor() {
    makeAutoObservable(this)
  }

  cars: CarModel[] = [
    new CarModel(1, 'Ferrari', '812 Superfast', 2017),
    new CarModel(2, 'Ferrari', '488 Pista', 2019),
    new CarModel(3, 'Audi', 'RS6', 2020),
    new CarModel(4, 'Audi', 'RS3', 2018),
    new CarModel(5, 'Mercedes', 'CLA45s', 2021)
  ]

  carsByMakes = this.sortCarsByMake()

  sortCarsByMake(): { [key: string]: CarModel[] } {
    return this.cars.reduce((acc, car) => {

      if (!acc[car.make]) {
        acc[car.make] = []
      }
      acc[car.make].push(car);
      return acc;
    }, {} as { [key: string]: CarModel[] });
  }

  addNewCar() {
    this.cars.push(
      new CarModel(6, 'Mercedes', 'CLE53', 2024)
    )
  }

}