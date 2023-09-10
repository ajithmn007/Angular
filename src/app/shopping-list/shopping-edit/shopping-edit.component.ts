import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
    @Output() ingredient = new EventEmitter<Ingredient>();
    @ViewChild('nameInput') name: ElementRef;
    @ViewChild('amountInput')amount: ElementRef;
    public onAddProduct(){
        this.ingredient.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value))
    }
}
