import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { ApplicationThemePreset } from './core/styles/primeng.theme';
import { provideHttpClient } from '@angular/common/http';
import { EnvironmentService } from './core/services/enviroment/environment.service';
import { ApplicationEnvironmentService } from './core/services/enviroment/application-environment.service';
import { StorageService } from './core/services/storage/storage.service';
import { LocalStorageService } from './core/services/storage/local-storage.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    { provide: EnvironmentService, useClass: ApplicationEnvironmentService },
    { provide: StorageService, useClass: LocalStorageService },
    MessageService,
    providePrimeNG({
      theme: {
        preset: ApplicationThemePreset,
        options: {
          prefix: 'p',
          darkModeSelector: false,
          cssLayer: {
            name: 'primeng',
            order: 'primeng'
          }
        }
      }
    })
  ]
};
