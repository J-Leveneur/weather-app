import { TemperatureUnit } from "./enums";

type Coordinate = {
  longitude: number;
  latitude: number;
};

type Temperature = {
  value: number;
  unit: TemperatureUnit;
};

type Email = {
  value: string;
  pattern: RegExp;
};

type Password = {
  value: string;
  pattern: RegExp;
  minLength: number;
  maxLength: number;
};

type Name = {
  value: string;
  minLength: number;
  maxLength: number;
};

export { Coordinate, Temperature, Email, Password, Name };
