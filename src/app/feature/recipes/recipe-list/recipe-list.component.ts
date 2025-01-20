import { Component, OnDestroy, OnInit } from '@angular/core';

// Model and service
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, RecipeItemComponent]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  filteredRecipes: Recipe[] = []; 
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
      this.filteredRecipes = recipes; 
    });

    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = [...this.recipes]; 
  }

  filterRecipes(searchTerm: string) {
    if (!searchTerm) {
      this.filteredRecipes = [...this.recipes];
    } else {
      this.filteredRecipes = this.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  get hasRecipes(): boolean {
    return this.filteredRecipes.length > 0;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

