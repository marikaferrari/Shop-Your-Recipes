import { ApplicationConfig } from '@angular/core';
import { appRoutes } from './app-routing.module';
import { provideCore } from './core/core';

export const appConfig: ApplicationConfig = {
  providers: [provideCore({ routes: appRoutes })],
};
