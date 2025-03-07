import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../../core/recipes/data-storage.service';
import { RecipeService } from './recipe.service';
import { toSignal } from '@angular/core/rxjs-interop'; 

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.recipesSignal();

    if (recipes.length === 0) {
      const fetchRecipes$ = this.dataStorageService.fetchRecipes();
      return toSignal(fetchRecipes$)(); 
    } else {
      return recipes;
    }
  }
}
