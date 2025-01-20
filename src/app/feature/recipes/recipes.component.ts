import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { filter } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { viewChild } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, RecipeListComponent, MatFormFieldModule, MatInputModule],
})
export class RecipesComponent implements OnInit {
  private recipeListComponent = viewChild<RecipeListComponent>(RecipeListComponent);

  isRouterActive: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isRouterActive = this.route.firstChild !== null;
      });
  }

  onSearch(searchTerm: string) {
    const recipeList = this.recipeListComponent();
    if (recipeList) {
      recipeList.filterRecipes(searchTerm);
    }
  }
}
