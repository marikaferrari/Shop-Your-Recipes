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
    this.categorizedIngredients = this.slService.getCategorizedIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.categorizedIngredients = this.slService.getCategorizedIngredients();
    });
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  onDeleteItem(category: string, index: number) {
    const ingredientIndex = this.slService.getIngredients().findIndex(ingredient => this.categorizedIngredients[category][index] === ingredient);
    this.slService.deleteIngredient(ingredientIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
