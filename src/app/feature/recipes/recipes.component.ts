import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { filter } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { viewChild } from '@angular/core';
import { WarningBannerComponent } from '../../ui/warning-banner/warning-banner.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, RecipeListComponent, WarningBannerComponent, MatFormFieldModule, MatInputModule],
})
export class RecipesComponent {
  private recipeListComponent = viewChild<RecipeListComponent>(RecipeListComponent);

  private currentRoute = signal<ActivatedRoute | null>(null);

  readonly isRouterActive = computed(() => this.currentRoute() !== null);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute.set(this.route.firstChild);
      });
  }

  onSearch(searchTerm: string) {
    const recipeList = this.recipeListComponent();
    if (recipeList) {
      recipeList.filterRecipes(searchTerm);
    }
  }
}
