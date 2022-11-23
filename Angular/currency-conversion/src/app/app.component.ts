import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CURRENCY CONVERSION';
  result! : number;
  cur = '';
  Calculate(val1:string,val2:string,val3:string){
    if(val1=="2" && val2=="3"){
      this.result = parseFloat(val3)/82.23;
      this.cur = 'USD'
    }
    else if(val1=="3" && val2=="2"){
      this.result = parseFloat(val3)*82.23;
      this.cur = 'INR'
    }
    else if(val1=="2" && val2=="4"){
      this.result = parseFloat(val3)/79.87;
      this.cur = 'EUR'
    }
    else if(val1=="4" && val2=="2"){
      this.result = parseFloat(val3)*79.87;
      this.cur = 'INR'
    } 
    else if(val1=="3" && val2=="4"){
      this.result = parseFloat(val3)/0.97;
      this.cur = 'EUR'
    }
    else if(val1=="4" && val2=="3"){
      this.result = parseFloat(val3)*0.97;
      this.cur = 'USD'
    } 
    else{
      this.result = parseFloat(val3);
    }

  }
}
