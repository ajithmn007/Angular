import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model"
export class ShoppingService{
    newIngredients = new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Orange', 10)]
    
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.newIngredients.emit(this.ingredients.slice())
    }

    addIngredients(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient)
        this.newIngredients.emit(this.ingredients.slice())
    }
    
}