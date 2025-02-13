import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, input, viewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { MatButtonModule } from '@angular/material/button';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, RecipeItemComponent, MatFormFieldModule, MatInputModule],
})
export class RecipeListComponent {
  private recipeListComponent = viewChild<RecipeListComponent>(RecipeListComponent);
  isRouterActive = input(false);

  private recipes = this.recipeService.recipesSignal;
  private searchTerm = signal<string>('');
  readonly filteredRecipes = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return term
      ? this.recipes().filter((recipe) =>
          recipe.name.toLowerCase().includes(term)
        )
      : this.recipes();
  });

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
     console.log(this.isRouterActive());
  }

  filterRecipes(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onSearch(searchTerm: string) {
    this.filterRecipes(searchTerm);
  }
  
}
