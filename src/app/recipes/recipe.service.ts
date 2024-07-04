import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Gazpacho',
      'Delicious Andalusian gazpacho (with a "z").',
      'https://images.unsplash.com/photo-1662469838214-a97415cd83fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      [
        new Ingredient(
          'Tomato',
          2,
          'https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Bread',
          1,
          'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Red Pepper',
          1,
          'https://images.unsplash.com/photo-1606170034765-13ccb20615b5?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
      ]
    ),
    new Recipe(
      'Herbs Ravioli',
      'Ravioli with herbs and tomatoes and some more stuff.',
      'https://images.unsplash.com/photo-1461009463816-4edea93afd6f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      [
        new Ingredient(
          'Tomato',
          1,
          'https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Egg',
          2,
          'https://images.unsplash.com/photo-1477506410535-f12fe9af97cc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Olive oil',
          1,
          'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD'
        ),
      ]
    ),
    new Recipe(
      'Cheese Sandwich',
      'Bread, cheese, ham ... what can go wrong?',
      'https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      [
        new Ingredient(
          'Cheese',
          2,
          'https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Ham',
          1,
          'https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Bread',
          1,
          'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
      ]
    ),
    new Recipe(
      'Seafood Pasta',
      'Can you hear the call of the sea?',
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      [
        new Ingredient(
          'Pasta',
          1,
          'https://images.unsplash.com/photo-1462618521524-07d259ab774a?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Shrimp',
          10,
          'https://images.unsplash.com/photo-1548587468-971ebe4c8c3b?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Tomato',
          5,
          'https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Olive Oil',
          1,
          'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
      ]
    ),
    new Recipe(
      'Omelette Du Fromage',
      'Quite the omelette, Dexter guaranteed.',
      'https://pbs.twimg.com/media/ChI8G3WWwAQXQby.jpg',
      [
        new Ingredient(
          'Tomato',
          2,
          'https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Bread',
          1,
          'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
        new Ingredient(
          'Red Pepper',
          1,
          'https://images.unsplash.com/photo-1606170034765-13ccb20615b5?q=80&w=2913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ),
      ]
    ),
  ];

  // private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
