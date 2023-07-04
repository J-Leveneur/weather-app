import Catastrophe from "./catastrophe";

class Alert {
  private start: Date;
  private end?: Date;
  private description?: string;
  private catastrophe: Catastrophe;

  constructor(
    start: Date,
    end: Date,
    description: string,
    catastrophe: Catastrophe
  ) {
    this.start = start;
    this.end = end;
    this.description = description;
    this.catastrophe = catastrophe;
  }

  public getStart(): Date {
    return this.start;
  }

  public getEnd(): Date | undefined {
    return this.end;
  }

  public setEnd(end: Date): void {
    this.end = end;
  }

  public getDescription(): string | undefined {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getCatastrophe(): Catastrophe {
    return this.catastrophe;
  }

  public setCatastrophe(catastrophe: Catastrophe): void {
    this.catastrophe = catastrophe;
  }
}

export default Alert;
