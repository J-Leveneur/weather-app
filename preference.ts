import { Temperature } from "./types";
import User from "./user";
import Profile from "./profile";

class Preference {
  private temperature: Temperature;
  private feelsLike: Temperature;
  private user: User;
  private profile: Profile;

  constructor(
    temperature: Temperature,
    feelsLike: Temperature,
    user: User,
    profile: Profile
  ) {
    this.temperature = temperature;
    this.feelsLike = feelsLike;
    this.user = user;
    this.profile = profile;
  }

  public getTemperature(): Temperature {
    return this.temperature;
  }

  public getFeelsLike(): Temperature {
    return this.feelsLike;
  }

  public getUser(): User {
    return this.user;
  }

  public getProfile(): Profile {
    return this.profile;
  }
}

export default Preference;
