import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[]=[
    new Recipe('Test recipe', 'Test desc', 'https://www.wholesomeyum.com/wp-content/uploads/2022/04/wholesomeyum-Sirloin-Steak-Recipe-8.jpg')
  ]
  @Output() recipeSelected = new EventEmitter<Recipe>();

  public onRecipeSeelcted(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
