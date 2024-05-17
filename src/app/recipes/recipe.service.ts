import { EventEmitter } from "@angular/core";

// Model
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Gazpacho', 'Delicious Andalusian gazpacho (with a "z").', 'https://images.unsplash.com/photo-1662469838214-a97415cd83fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        [
        new Ingredient('Tomato', 2),
        new Ingredient('Bread', 1),
        new Ingredient('Red Pepper', 1)
        ]),
        new Recipe('Ravioli', 'Ravioli with hearbs and tomatoes and some more stuff.', 'https://images.unsplash.com/photo-1461009463816-4edea93afd6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', [
            new Ingredient('Tomato', 1),
            new Ingredient('Egg', 2),
            new Ingredient('Olive oil', 1),
        ])
      ];

    getRecipes() {
        // slice creates a new array, a copy of recipes
        return this.recipes.slice();
    }
}