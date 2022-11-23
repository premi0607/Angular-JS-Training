import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result!:number;
  title = 'WebCalculator';
  Calculate(val1:string,val2:string){
    this.result= parseFloat(val1) + parseFloat(val2);
  }
  result2! : number;
  Calculatesub(val1:string,val2:string){
    this.result2 =  parseFloat(val1) - parseFloat(val2);;
  }
}
