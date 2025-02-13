import {
    Routes,
    provideRouter,
    withComponentInputBinding,
    withEnabledBlockingInitialNavigation,
    withInMemoryScrolling,
    withRouterConfig,
  } from '@angular/router';
  import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders, Provider } from '@angular/core';
  import { provideAnimations } from '@angular/platform-browser/animations';
  import { provideHttpClient, withInterceptors } from '@angular/common/http';
  import { AuthInterceptorService } from './auth/auth-interceptor.service';
  import { DataStorageService } from './recipes/data-storage.service';
  import { RecipeService } from '../feature/recipes/recipe.service';
  import { ShoppingListService } from '../feature/shopping-list/shopping-list.service';
  
  export interface CoreOptions {
    routes: Routes; 
  }
  
  export function provideCore({ routes }: CoreOptions): EnvironmentProviders {
    return makeEnvironmentProviders([
      provideAnimations(),
      provideHttpClient(),
    //   provideHttpClient(withInterceptors([AuthInterceptorService])),
      provideRouter(
        routes,
        withRouterConfig({ onSameUrlNavigation: 'reload' }),
        withComponentInputBinding(),
        withEnabledBlockingInitialNavigation(),
        withInMemoryScrolling({
          anchorScrolling: 'enabled',
          scrollPositionRestoration: 'enabled',
        }),
      ),
      DataStorageService,
      RecipeService,
      ShoppingListService,
  
      {
        provide: ENVIRONMENT_INITIALIZER,
        multi: true,
        useValue() {
          // console.log('Environment initialized...');
        },
      },
    ]);
  }
  