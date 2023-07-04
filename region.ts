import Place from "./place";
import { Coordinate } from "./types";

class Region {
  private place: Place;

  constructor(place: Place) {
    this.place = place;
  }

  public getCoordinate(): Coordinate {
    return this.place.getCoordinate();
  }

  public getPopulation(): number | undefined {
    return this.place.getPopulation();
  }

  public getName(): string {
    return this.place.getName();
  }
}
