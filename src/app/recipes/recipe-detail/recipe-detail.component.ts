import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    @Input() recipe : Recipe;

    constructor(private recipeService: RecipeService){}

    public addToShoppingList(){
      this.recipeService.addIngredientsToSL(this.recipe.ingredients)
    }
}
