import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients:Ingredient[] 

    constructor(private _shoppingService: ShoppingService){}

    ngOnInit(): void {
        this.ingredients = this._shoppingService.getIngredients();
        this._shoppingService.newIngredients.subscribe((ingredinet: Ingredient[])=>{
            this.ingredients = ingredinet
        })
    }
}
