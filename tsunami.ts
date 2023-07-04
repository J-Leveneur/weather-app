import Catastrophe from "./catastrophe";
import { Name } from "./types";

class Tsunami {
  private height: number;
  private catastrophe: Catastrophe;

  constructor(height: number, catastrophe: Catastrophe) {
    this.height = height;
    this.catastrophe = catastrophe;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public getCatastropheName(): Name {
    return this.catastrophe.getName();
  }

  public getCatastropheDescription(): string | undefined {
    return this.catastrophe.getDescription();
  }
}
