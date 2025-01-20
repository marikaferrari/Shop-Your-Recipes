import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { take, exhaustMap, map, tap } from 'rxjs/operators';
import { Recipe } from '../../feature/recipes/recipe.model';
import { RecipeService } from '../../feature/recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private url =
    'https://shop-your-recipes-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.recipesSignal(); 
    this.http.put(this.url, recipes).subscribe({
      next: (response) => {
        console.log('Recipes successfully stored:', response);
      },
      error: (error) => {
        console.error('Failed to store recipes:', error);
      },
    });
  }

  fetchRecipes() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(this.url, {
          params: new HttpParams().set('auth', user.token),
        });
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}