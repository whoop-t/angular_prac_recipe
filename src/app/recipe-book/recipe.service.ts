import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "TESTING",
      "https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg"
    ),
    new Recipe(
      "Tommy test 2",
      "Another one",
      "https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg"
    )
  ];
  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
