import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model"
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService{

    constructor(private shoppingService: ShoppingService){}

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('Halibot Swordfish Fry', 
        'Tasty Swordfish',
         'https://www.wholesomeyum.com/wp-content/uploads/2022/04/wholesomeyum-Sirloin-Steak-Recipe-8.jpg',
        [
            new Ingredient('Fish Peices', 1),
            new Ingredient('Tasty Sauce', 2)
    ])
      ]
    
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToSL(ingredient: Ingredient[]){
        this.shoppingService.addIngredients(ingredient)
    }


}