import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public feature:string ='recipe'

  /* public onPassedFeature(feature:string){
    this.feature = feature;
  } */
}
