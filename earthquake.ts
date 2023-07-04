import Catastrophe from "./catastrophe";
import { Name } from "./types";

class Earthquake {
  private intensity: number;
  private catastrophe: Catastrophe;

  constructor(intensity: number, catastrophe: Catastrophe) {
    this.intensity = intensity;
    this.catastrophe = catastrophe;
  }

  public getIntensity(): number {
    return this.intensity;
  }

  public getCatastropheName(): Name {
    return this.catastrophe.getName();
  }

  public getCatastropheDescription(): string | undefined {
    return this.catastrophe.getDescription();
  }
}

export default Earthquake;
