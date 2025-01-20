import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Needed for databinding
// import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { RecipesComponent } from './feature/recipes/recipes.component';
import { RecipeListComponent } from './feature/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './feature/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './feature/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './feature/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeEditComponent } from './feature/recipes/recipe-edit/recipe-edit.component';
import { AuthComponent } from './feature/auth/auth.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { AlertComponent } from './ui/alert/alert.component';
import { KeepAwakeComponent } from './feature/shopping-list/keep-awake/keep-awake.component';

// Directives
import { DropdownDirective } from './ui/dropdown/dropdown.directive';
import { PlaceholderDirective } from './ui/placeholder/placeholder.directive';

// Services
import { RecipeService } from './feature/recipes/recipe.service';
import { ShoppingListService } from './feature/shopping-list/shopping-list.service';
import { AuthInterceptorService } from './core/auth/auth-interceptor.service';

// Module
import { AppRoutingModule } from './app-routing.module';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

// CDK
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    CdkTextareaAutosize,
    DropdownDirective,
    PlaceholderDirective,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    KeepAwakeComponent,
    ],
    providers: [
      RecipeService,
      ShoppingListService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true,
      },
      provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
