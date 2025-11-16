import { EnvironmentVariables } from '../app/core/interfaces/environment.interface';

export const environment: EnvironmentVariables = {
  production: false,
  apiBaseUrl: 'http://localhost:8080',
  systemConfigUrl: '/system-config/settings.json',
};
