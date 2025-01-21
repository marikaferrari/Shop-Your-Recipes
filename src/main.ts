import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app-routing.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptorService } from './app/core/auth/auth-interceptor.service';
import { DataStorageService } from './app/core/recipes/data-storage.service';
import { RecipeService } from './app/feature/recipes/recipe.service';
import { ShoppingListService } from './app/feature/shopping-list/shopping-list.service';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideHttpClient(),
    // provideHttpClient(withInterceptors([AuthInterceptorService])),
    DataStorageService,
    RecipeService,
    ShoppingListService
  ],
}).catch((err) => console.error(err));
