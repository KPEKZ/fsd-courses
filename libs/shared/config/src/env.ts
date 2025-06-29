import { InjectionToken } from "@angular/core";

export interface EnvConfig {
  API_URL: string;
}

export const environment: EnvConfig = {
  API_URL: 'https://fsd-courses.com'
};

export const APP_CONFIG = new InjectionToken<EnvConfig>(
  'Application config',
  {
    providedIn: 'root',
    factory: () => environment
  }
);
