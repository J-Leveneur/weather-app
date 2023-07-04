import { Role } from "./enums";
import { Email, Name, Password } from "./types";
import Profile from "./profile";
import Preference from "./preference";

class User {
  private givenName: Name;
  private familyName: Name;
  private email: Email;
  private password: Password;
  private role: Role;
  private profile?: Profile;
  private preferences?: Preference[];

  constructor(
    givenName: Name,
    familyName: Name,
    email: Email,
    password: Password,
    role: Role,
    profile?: Profile,
    preferences?: Preference[]
  ) {
    this.givenName = givenName;
    this.familyName = familyName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.profile = profile;
    this.preferences = preferences;
  }

  public getGivenName(): Name {
    return this.givenName;
  }

  public setGivenName(givenName: Name): void {
    this.givenName = givenName;
  }

  public getFamilyName(): Name {
    return this.familyName;
  }

  public setFamilyName(familyName: Name): void {
    this.familyName = familyName;
  }

  public getEmail(): Email {
    return this.email;
  }

  public setEmail(email: Email): void {
    this.email = email;
  }

  public getPassword(): Password {
    return this.password;
  }

  public getRole(): Role {
    return this.role;
  }

  public getProfile(): Profile | undefined {
    return this.profile;
  }

  public getPreferences(): Preference[] | undefined {
    return this.preferences;
  }

  public addPreference(preference: Preference): void {
    this.preferences?.push(preference);
  }
}

export default User;
