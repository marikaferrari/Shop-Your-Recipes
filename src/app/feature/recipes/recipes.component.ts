import { Component, signal, computed } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { filter } from 'rxjs/operators';
import { WarningBannerComponent } from '../../ui/warning-banner/warning-banner.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  standalone: true,
  imports: [RouterModule, RecipeListComponent, WarningBannerComponent],
})
export class RecipesComponent {
  private currentRoute = signal<ActivatedRoute | null>(null);

  readonly isRouterActive = computed(() => this.currentRoute() !== null);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute.set(this.route.firstChild);
      });
  }
}
