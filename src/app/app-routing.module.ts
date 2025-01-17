import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { RecipesComponent } from "./feature/recipes/recipes.component";
import { ShoppingListComponent } from "./feature/shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./feature/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./feature/recipes/recipe-edit/recipe-edit.component";
import { AuthComponent } from "./core/auth/auth.component";

// Services
import { RecipesResolverService } from "./feature/recipes/recipes-resolver.service";

// Guard
// import { AuthGuard } from "./core/auth/auth.guard";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, 
        // canActivate: [AuthGuard], 
        children: [
        // { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'auth', component: AuthComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            onSameUrlNavigation: 'reload',
      bindToComponentInputs: true,
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}