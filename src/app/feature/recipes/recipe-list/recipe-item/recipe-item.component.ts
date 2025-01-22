import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }

}
