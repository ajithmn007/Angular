import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() onfeatureselected = new EventEmitter<string>()
    public onSelect(selected:string){
        this.onfeatureselected.emit(selected)
    }
}
