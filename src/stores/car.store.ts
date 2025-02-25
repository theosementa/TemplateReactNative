import { makeAutoObservable } from "mobx";
import { CarModel } from "../domain/models/car.model";
import { CarService } from "../services/car.service";

export class CarStore {
  static shared = new CarStore()

  constructor() {
    makeAutoObservable(this)
  }

  cars: CarModel[] = []

  async fetchAllCars() {
    this.cars = await CarService.fetchAll()
  }

  async addNewCar() {
    const newCLE = await CarService.createCLE53()
    this.cars.push(newCLE)
  }


  get carsByMakes() {
    return this.sortCarsByMake()
  }

  sortCarsByMake(): { [key: string]: CarModel[] } {
    return this.cars.reduce((acc, car) => {

      if (!acc[car.make]) {
        acc[car.make] = []
      }
      acc[car.make].push(car);
      return acc;
    }, {} as { [key: string]: CarModel[] });
  }

}