import { makeAutoObservable } from "mobx";
import { CarModel } from "../../domain/models/car.model";

export class CarStore {
  static shared = new CarStore()

  constructor() {
    makeAutoObservable(this)
  }

  cars: CarModel[] = [
    new CarModel(1, 'Ferrari', '812 Superfast', 2017),
    new CarModel(2, 'Ferrari', '812 Superfast', 2017),
    new CarModel(3, 'Ferrari', '812 Superfast', 2017),
    new CarModel(4, 'Ferrari', '812 Superfast', 2017),
    new CarModel(5, 'Ferrari', '812 Superfast', 2017),
    new CarModel(6, 'Ferrari', '812 Superfast', 2017)
  ]

}