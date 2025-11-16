import { inject, Signal } from "@angular/core";
import { EnvironmentVariables } from "../../interfaces/environment.interface";

export abstract class EnvironmentService {
  abstract initialized: Signal<boolean>;
  abstract getApiBaseUrl(): string;
  
  abstract updateEnvironment(): Promise<Partial<EnvironmentVariables>>;
}

export async function initializeEnviromentService(){
  const environment = inject(EnvironmentService);

  await environment.updateEnvironment();
}
