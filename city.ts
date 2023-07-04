import Place from "./place";
import { ZipCode, Coordinate } from "./types";

class City {
  private zipCode: ZipCode;
  private place: Place;

  constructor(zipCode: ZipCode, place: Place) {
    this.zipCode = zipCode;
    this.place = place;
  }

  public getZipCode(): ZipCode {
    return this.zipCode;
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
