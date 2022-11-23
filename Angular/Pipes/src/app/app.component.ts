import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : '<h2>{{person | json}}</h2><br><h2>{{name |lowercase}}</h2><br>',
  styles: []
})
export class AppComponent {
  title = 'Pipes';
  public name ="Pipes Concept"
  public person ={
    "firstName":"John",
    "lastName": "Doe"
  }
}
