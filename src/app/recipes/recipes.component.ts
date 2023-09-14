import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    public selectedRecipe : Recipe;

    constructor(private _recipeService: RecipeService){

    }
    public ngOnInit(): void {
      this._recipeService.recipeSelected.subscribe((recipe:Recipe)=> this.selectedRecipe = recipe)
    }
}
