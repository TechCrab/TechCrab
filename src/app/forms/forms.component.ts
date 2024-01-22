import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, NgForm,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent  implements OnInit {


  constructor() { }
  signin=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
 

  ngOnInit()
   {
  }
  Submit(){
    console.log(this.signin.value)
  }
  // get email()
  // {
  //   return this.signin.get('email')
  // }
  
}
