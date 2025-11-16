import { Injectable, signal, WritableSignal } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { EnvironmentVariables } from '../../interfaces/environment.interface';
import { environment } from '../../../../enviroments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class ApplicationEnvironmentService implements EnvironmentService {
  private _initialized : WritableSignal<boolean> = signal(false);
  private _environment : WritableSignal<EnvironmentVariables> = signal(environment);

  initialized = this._initialized.asReadonly();
  environment = this._environment.asReadonly();

    async updateEnvironment(): Promise<EnvironmentVariables> {
    const environment = await this.getEnvironment();

    this._environment.update(currentEnvironment => ({
      ...currentEnvironment,
      ...environment,
    }));
    this.markEnvironmentAsInitialized();

    return this.environment();
  }

  getApiBaseUrl(): string {
    return this._environment().apiBaseUrl;
  }

  private async getEnvironment(): Promise<Partial<EnvironmentVariables>> {
    const environment = this._environment();

    if (!environment.production) return Promise.resolve(environment);
    return this.fetchRemoteEnvironment();
  }

  private async fetchRemoteEnvironment(): Promise<Partial<EnvironmentVariables>> {
    const { systemConfigUrl } = this.environment();
    try {
      const response = await fetch(systemConfigUrl);
      return response.json() as Partial<EnvironmentVariables>;
    } catch {
      return Promise.resolve(environment);
    }
  }

  private markEnvironmentAsInitialized() {
    this._initialized.set(true);
  }

}
