import { Name } from "./types";
import Preference from "./preference";

class Profile {
  private name: Name;
  private preferences: Preference[];

  constructor(name: Name, preferences: Preference[]) {
    this.name = name;
    this.preferences = preferences;
  }

  public getName(): Name {
    return this.name;
  }

  public setName(name: Name): void {
    this.name = name;
  }

  public getPreferences(): Preference[] {
    return this.preferences;
  }

  public addPreference(preference: Preference): void {
    this.preferences.push(preference);
  }
}

export default Profile;
