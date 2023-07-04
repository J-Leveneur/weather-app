import Catastrophe from "./catastrophe";
import { Name } from "./types";

class Hurricane {
  private strength: number;
  private catastrophe: Catastrophe;

  constructor(strength: number, catastrophe: Catastrophe) {
    this.strength = strength;
    this.catastrophe = catastrophe;
  }

  public getStrength(): number {
    return this.strength;
  }

  public setStrength(strength: number): void {
    this.strength = strength;
  }

  public getCatastropheName(): Name {
    return this.catastrophe.getName();
  }

  public getCatastropheDescription(): string | undefined {
    return this.catastrophe.getDescription();
  }
}

export default Hurricane;
