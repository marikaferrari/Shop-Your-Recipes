import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RecipesComponent } from './feature/recipes/recipes.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './feature/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './feature/recipes/recipe-edit/recipe-edit.component';
import { AuthComponent } from './feature/auth/auth.component';

// Services
import { RecipesResolverService } from './feature/recipes/recipes-resolver.service';
import { ShoppingListService } from './feature/shopping-list/shopping-list.service';
import { AuthService } from './core/auth/auth.service';

// Guard
// import { AuthGuard } from "./core/auth/auth.guard";

export const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    providers: [RecipesResolverService],
    component: RecipesComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
  { path: 'shopping-list', providers: [ShoppingListService], component: ShoppingListComponent },
  { path: 'auth', providers: [AuthService], component: AuthComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload',
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
