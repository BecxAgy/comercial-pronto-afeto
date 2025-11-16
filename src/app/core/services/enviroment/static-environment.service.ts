import { Injectable, signal, Signal, WritableSignal } from '@angular/core';


import { EnvironmentService } from './environment.service';
import { EnvironmentVariables } from '../../interfaces/environment.interface';
import { environment } from '../../../../enviroments/environment.local';

@Injectable()
export class StaticEnvironmentService implements EnvironmentService {
  _initialized: WritableSignal<boolean> = signal(true);
  initialized: Signal<boolean> = this._initialized.asReadonly();

  updateEnvironment(): Promise<Partial<EnvironmentVariables>> {
    return Promise.resolve(environment);
  }

  getApiBaseUrl(): string {
    return environment.apiBaseUrl;
  }

}
