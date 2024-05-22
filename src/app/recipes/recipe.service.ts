import { EventEmitter, Injectable } from "@angular/core";

// Model
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Gazpacho', 'Delicious Andalusian gazpacho (with a "z").', 'https://images.unsplash.com/photo-1662469838214-a97415cd83fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        [
        new Ingredient('Tomato', 2),
        new Ingredient('Bread', 1),
        new Ingredient('Red Pepper', 1)
        ]),
        new Recipe('Herbs Ravioli', 'Ravioli with herbs and tomatoes and some more stuff.', 'https://images.unsplash.com/photo-1461009463816-4edea93afd6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', [
            new Ingredient('Tomato', 1),
            new Ingredient('Egg', 2),
            new Ingredient('Olive oil', 1),
        ]),
        new Recipe('Cheese Sandwich', 'Bread, cheese, ham ... what can go wrong?', 'https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        [
        new Ingredient('Cheese', 2),
        new Ingredient('Ham', 1),
        new Ingredient('Bread', 1)
        ]),
        new Recipe('Seafood Pasta', 'Can you hear the call of the sea?', 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        [
        new Ingredient('Pasta', 1),
        new Ingredient('Shrimp', 10),
        new Ingredient('Tomato', 5),
        new Ingredient('Olive Oil', 1),
        ]),
        new Recipe('Omelette Du Fromage', 'Quite the omelette, Dexter guaranteed.', 'https://pbs.twimg.com/media/ChI8G3WWwAQXQby.jpg',
        [
        new Ingredient('Tomato', 2),
        new Ingredient('Bread', 1),
        new Ingredient('Red Pepper', 1)
        ]),
        new Recipe('Gazpacho', 'Delicious Andalusian gazpacho (with a "z").', 'https://images.unsplash.com/photo-1662469838214-a97415cd83fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        [
        new Ingredient('Tomato', 2),
        new Ingredient('Bread', 1),
        new Ingredient('Red Pepper', 1)
        ]),
        new Recipe('Herbs Ravioli', 'Ravioli with herbs and tomatoes and some more stuff.', 'https://images.unsplash.com/photo-1461009463816-4edea93afd6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', [
            new Ingredient('Tomato', 1),
            new Ingredient('Egg', 2),
            new Ingredient('Olive oil', 1),
        ]),
        new Recipe('Cheese Sandwich', 'Bread, cheese, ham ... what can go wrong?', 'https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        [
        new Ingredient('Cheese', 2),
        new Ingredient('Ham', 1),
        new Ingredient('Bread', 1)
        ]),
        new Recipe('Seafood Pasta', 'Can you hear the call of the sea?', 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        [
        new Ingredient('Pasta', 1),
        new Ingredient('Shrimp', 10),
        new Ingredient('Tomato', 5),
        new Ingredient('Olive Oil', 1),
        ]),
        new Recipe('Omelette Du Fromage', 'Quite the omelette, Dexter guaranteed.', 'https://pbs.twimg.com/media/ChI8G3WWwAQXQby.jpg',
        [
        new Ingredient('Egg', 2),
        new Ingredient('Fromage', 1),
        ])
      ];

    constructor(private slService: ShoppingListService) {
        this.slService;
    }

    getRecipes() {
        // slice creates a new array, a copy of recipes
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredientsFromRecipe(ingredients);
    }
}