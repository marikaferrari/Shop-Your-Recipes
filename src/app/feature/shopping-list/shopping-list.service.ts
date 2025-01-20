import { Injectable } from '@angular/core';
import { Ingredient } from '../../core/models/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root', // This ensures it is globally available
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, "https://images.unsplash.com/photo-1476837579993-f1d3948f17c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
    new Ingredient('Tomato', 10, "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),
  ];

  private categories = {
    'Vegetables': ['Tomato', 'Carrot', 'Lettuce', 'Pepper', 'Broccoli'],
    'Fruits': ['Apples', 'Banana', 'Orange', 'Strawberry', 'Grapes'],
    'Dairy': ['Milk', 'Cheese', 'Yogurt'],
    'Meat': ['Chicken', 'Beef', 'Pork'],
    'Grains': ['Bread', 'Rice', 'Pasta']
  };

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient) {
    const existingIngredientIndex = this.ingredients.findIndex(ingredient => ingredient.name === newIngredient.name);
    if (existingIngredientIndex !== -1) {
      this.ingredients[existingIngredientIndex].amount += newIngredient.amount;
    } else {
      this.ingredients.push(newIngredient);
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(newIngredient => {
      const existingIngredientIndex = this.ingredients.findIndex(ingredient => ingredient.name === newIngredient.name);
      if (existingIngredientIndex !== -1) {
        this.ingredients[existingIngredientIndex].amount += newIngredient.amount;
      } else {
        this.ingredients.push(newIngredient);
      }
    });
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getCategorizedIngredients() {
    const categorizedIngredients = {};

    for (const category in this.categories) {
      categorizedIngredients[category] = this.ingredients.filter(ingredient => this.categories[category].includes(ingredient.name));
    }

    return categorizedIngredients;
  }
}
