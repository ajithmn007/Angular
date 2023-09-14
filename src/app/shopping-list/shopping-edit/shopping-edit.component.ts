import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
    @ViewChild('nameInput') name: ElementRef;
    @ViewChild('amountInput')amount: ElementRef;

    constructor(private _shopping_service: ShoppingService){}
    
    public onAddProduct(){
        this._shopping_service.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value))
    }
}
