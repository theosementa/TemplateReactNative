export class CarModel {
  id: number
  make: string
  model: string
  year: number

  constructor(id: number, make: string, model: string, year: number) {
    this.id = id
    this.make = make
    this.model = model
    this.year = year
  }
}