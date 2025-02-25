import axios from "axios";
import { CarModel } from "../domain/models/car.model";

export class CarService {

  static async fetchAll(): Promise<CarModel[]> {
    const response = await axios.get<CarModel[]>('http://localhost:3000/vehicle')
    const cars = response.data.map(car => new CarModel(
      car.id,
      car.make,
      car.model,
      car.year
    ))

    return cars
  }

  static async createCLE53(): Promise<CarModel> {
    const CLE53 = {
      make: "Mercedes",
      model: "CLE53",
      year: 2024
    }
    const response = await axios.post<CarModel>('http://localhost:3000/vehicle', CLE53)
    const newCar = response.data
    return newCar
  }

}