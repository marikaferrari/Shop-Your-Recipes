import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { MatButtonModule } from '@angular/material/button';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, RecipeItemComponent],
})
export class RecipeListComponent {
  // Signals for recipes and filtered recipes
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

  readonly hasRecipes = computed(() => this.filteredRecipes().length > 0);

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  filterRecipes(searchTerm: string) {
    this.searchTerm.set(searchTerm);
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
