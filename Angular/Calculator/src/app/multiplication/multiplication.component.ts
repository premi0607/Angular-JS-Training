import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  constructor() { }
  result!:number;
  title = 'WebCalculator';
  Calculate(val1:string,val2:string){
    this.result= parseFloat(val1) * parseFloat(val2);
  }
  ngOnInit(): void {
  }

}
