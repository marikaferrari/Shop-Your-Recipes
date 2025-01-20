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
  private recipes = signal<Recipe[]>(this.recipeService.getRecipes());
  private filteredRecipes = signal<Recipe[]>([...this.recipes()]);

  readonly hasRecipes = computed(() => this.filteredRecipes().length > 0);

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes.set(recipes);
      this.filteredRecipes.set([...recipes]);
    });
  }

  filterRecipes(searchTerm: string) {
    if (!searchTerm) {
      this.filteredRecipes.set([...this.recipes()]);
    } else {
      this.filteredRecipes.set(
        this.recipes().filter((recipe) =>
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
