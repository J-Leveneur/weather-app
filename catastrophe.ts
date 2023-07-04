import { Name } from "./types";
import Alert from "./alert";

class Catastrophe {
  private name: Name;
  private description?: string;
  private alerts: Alert[];

  constructor(name: Name, description?: string, alerts: Alert[] = []) {
    this.name = name;
    this.description = description;
    this.alerts = alerts;
  }

  public getName(): Name {
    return this.name;
  }

  public setName(name: Name): void {
    this.name = name;
  }

  public getDescription(): string | undefined {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getAlerts(): Alert[] {
    return this.alerts;
  }

  public addAlert(alert: Alert): void {
    this.alerts.push(alert);
  }
}

export default Catastrophe;
