import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../core/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { KeepAwakeComponent } from './keep-awake/keep-awake.component';
import { MatIconModule } from '@angular/material/icon';
import { WarningBannerComponent } from '../../ui/warning-banner/warning-banner.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, ShoppingEditComponent, KeepAwakeComponent, WarningBannerComponent]
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
