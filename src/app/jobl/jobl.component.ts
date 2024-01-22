import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobl',
  templateUrl: './jobl.component.html',
  styleUrls: ['./jobl.component.scss'],
})
export class JoblComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  status=['active','closed']
  experience=[1,2,3,4,5]
  skils=['HTML','CSS','JAVASCRIPT']

  form=new FormGroup({
    title:new FormControl('',[Validators.required,]),
    location:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required]),
    date:new FormControl('',[Validators.required]),
    experience:new FormControl('',[Validators.required]),
    skils:new FormControl('',[Validators.required]),
    industry:new FormControl('',[Validators.required])

  })

  Submit()
  {
    console.log(this.form.value)
  }

  hide:boolean=true
onClick(){
  this.hide=!this.hide

}
}
