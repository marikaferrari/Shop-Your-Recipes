import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  categorizedIngredients: { [key: string]: Ingredient[] } = {};
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.updateCategorizedIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.updateCategorizedIngredients();
    });
  }

  updateCategorizedIngredients() {
    const categorizedIngredients = this.slService.getCategorizedIngredients();
    this.categorizedIngredients = Object.keys(categorizedIngredients)
      .filter(category => categorizedIngredients[category].length > 0)
      .reduce((acc, category) => {
        acc[category] = categorizedIngredients[category];
        return acc;
      }, {});
  }

  onEditItem(category: string, index: number) {
    const ingredientIndex = this.slService.getIngredients().findIndex(ingredient => this.categorizedIngredients[category][index] === ingredient);
    this.slService.startedEditing.next(ingredientIndex);
  }

  onDeleteItem(category: string, index: number) {
    const ingredientIndex = this.slService.getIngredients().findIndex(ingredient => this.categorizedIngredients[category][index] === ingredient);
    this.slService.deleteIngredient(ingredientIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
