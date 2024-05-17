import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.recipetineats.com/wp-content/uploads/2024/05/Pizza-Capricciosa_8.jpg?w=747&h=747&crop=1')
      ];

    getRecipes() {
        // slice creates a new array, a copy of recipes
        return this.recipes.slice();
    }
}