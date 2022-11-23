import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  constructor() { }
  result!:number;
  title = 'WebCalculator';
  Calculate(val1:string,val2:string){
    this.result= parseFloat(val1) / parseFloat(val2);
  }
  ngOnInit(): void {
  }

}
