import Catastrophe from "./catastrophe";
import Preference from "./preference";
import Place from "./place";

class Alert {
  private start: Date;
  private end?: Date;
  private description?: string;
  private catastrophe: Catastrophe;
  private preference: Preference;
  private place: Place;

  constructor(
    start: Date,
    end: Date,
    description: string,
    catastrophe: Catastrophe,
    Preference: Preference,
    place: Place
  ) {
    this.start = start;
    this.end = end;
    this.description = description;
    this.catastrophe = catastrophe;
    this.preference = Preference;
    this.place = place;
  }

  public getStart(): Date {
    return this.start;
  }

  public getEnd(): Date | undefined {
    return this.end;
  }

  public getDescription(): string | undefined {
    return this.description;
  }

  public getCatastrophe(): Catastrophe {
    return this.catastrophe;
  }

  public getPreference(): Preference {
    return this.preference;
  }

  public getPlace(): Place {
    return this.place;
  }
}

export default Alert;
