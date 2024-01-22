import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.getdata())
  }

obj:any={
  JOB_ID: "id_002",
  Job_Title: "Backend Developer",
  Location: "Bengaluru, Karnataka",
  Status: "closed",
  Date_Posted: "02 Aug 1993"

}

getdata()
{
  return Object.values(this.obj)
}
 

}
