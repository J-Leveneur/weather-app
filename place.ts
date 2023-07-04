import { Coordinate } from "./types";

class Place {
  private name: string;
  private coordinate: Coordinate;
  private population?: number;

  constructor(name: string, coordinate: Coordinate, population?: number) {
    this.name = name;
    this.coordinate = coordinate;
    this.population = population;
  }

  public getName(): string {
    return this.name;
  }

  public getCoordinate(): Coordinate {
    return this.coordinate;
  }

  public getPopulation(): number | undefined {
    return this.population;
  }
}

export default Place;
