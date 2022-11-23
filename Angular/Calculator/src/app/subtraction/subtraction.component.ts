import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

  constructor() { }
  result!:number;
  title = 'WebCalculator';
  Calculate(val1:string,val2:string){
    this.result= parseFloat(val1) - parseFloat(val2);
  }
  ngOnInit(): void {
  }

}
