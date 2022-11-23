import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor() { }
  result!:number;
  title = 'WebCalculator';
  Calculate(val1:string,val2:string){
    this.result= parseFloat(val1) + parseFloat(val2);
  }

  ngOnInit(): void {
  }

}
