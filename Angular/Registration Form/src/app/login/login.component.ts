import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray,FormBuilder,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  requiredForm: FormGroup;
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) { 
     this.myForm();
  }

  //Create required field validator for name
  myForm() {
     this.requiredForm = this.fb.group({
     name: ['', Validators.required ]
     });
  }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      phone: new FormControl(null, [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
      name: new FormControl(null, [Validators.required])
    });
  }
  onSubmit() {
    alert('FORM IS SUCCESSFULLY SUBMITTED');
  }
  countryList: Array<any> = [
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'India', cities: ['Chennai','Bangalore','Delhi','Mumbai','Coimbatore'] },
    { name: 'USA', cities: ['Downers Grove','New York','Los Angeles','Chicago','Texas'] },
    { name: 'France', cities: ['Paris','Bordeaux','Cannes','Lille','Lyon','Marseille'] },
    { name: 'China', cities: ['Beijing','Chongqing','Shanghai','Tianjin'] },
  ];
  cities: Array<any>;
  changeCountry(count: any) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  } 
}
