import { Component } from '@angular/core';
import { __values } from 'tslib';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dropdown';
  img = '';
  img2 = '';
  warning ='';
  res='';
  res1=''
  set ='true';
  modo(value: string){
    switch(value) {
      case "mod1":
         // if modo 1 is selected do something.
         this.img = 'https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg'
         break;
      case "mod2":
         // if modo 2 is selected do something.
         this.img = 'https://thumbs.dreamstime.com/b/mango-ripe-white-background-35283521.jpg'
         break;
      case "mod3":
         // if modo 3 is selected do something.
         this.img = 'https://thumbs.dreamstime.com/b/sliced-orange-fruit-leaves-isolated-white-23331258.jpg'
         break;
      case "mod4":
          // if modo 4 is selected do something.
          this.img = 'https://m.media-amazon.com/images/I/41P8zMQqR7L._SX466_.jpg'
          break;
       case "mod5":
          // if modo 5 is selected do something.
          this.img = 'https://thumbs.dreamstime.com/b/cherries-isolated-white-background-45704027.jpg'
          break;
    }
  }
  Display(value:string){
    if(value=='Tiger'||value=='TIGER'||value=='tiger'){
       this.img2 = 'https://images.pexels.com/photos/46251/sumatran-tiger-tiger-big-cat-stripes-46251.jpeg?cs=srgb&dl=pexels-pixabay-46251.jpg&fm=jpg '
    }
    else if(value=='Lion'||value=='LION'||value=='lion'){
      this.img2 = 'https://st.depositphotos.com/1004061/3547/i/600/depositphotos_35477449-stock-photo-big-lion-lying-on-savannah.jpg '
    }
    else if(value=='Elephant'||value=='ELEPHANT'||value=='elephant'){
      this.img2 = 'https://st.depositphotos.com/1015682/1248/i/600/depositphotos_12483210-stock-photo-elephant-with-large-tusks.jpg '
    }
    else if(value=='Zebra'||value=='ZEBRA'||value=='zebra'){
      this.img2 = 'https://media.gettyimages.com/photos/africa-namibia-etosha-national-park-burchells-zebras-equus-quagga-picture-id1043597638?s=612x612 '
    }
    else if(value=='Deer'||value=='DEER'||value=='deer'){
      this.img2 = 'https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
    else if(value=='Fox'||value=='FOX'||value=='fox'){
      this.img2 = 'https://images.pexels.com/photos/247399/pexels-photo-247399.jpeg?cs=srgb&dl=pexels-pixabay-247399.jpg&fm=jpg '
    }
    else{
        this.warning = '***Invalid Input***'
    }

  }
  Disname(value:string){
    this.res=value;
  }
  NameDis(value:string){
    this.res1=value;
  }
  validate(value:string){
     if(value.length >= 10){
      this.set= 'false';
     }
  }
  constructor() {
    
    
  }
}

