import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.scss'],
})
export class JoblistComponent implements OnInit {

  constructor() {
    this.getData()
  }

  ngOnInit() {
    this.sortMeAsc()
  }

  array: any = [
    {
      JOB_ID: "id_001",
      Job_Title: "Jr.UI Developer",
      Location: "Bengaluru, Karnataka",
      Status: "active",
      Date_Posted: "22 Dec 2003"

    },
    {
      JOB_ID: "id_002",
      Job_Title: "Backend Developer",
      Location: "Bengaluru, Karnataka",
      Status: "closed",
      Date_Posted: "02 Aug 1993"

    },
    {
      JOB_ID: "id_003",
      Job_Title: "Angular DEVELOPER",
      Location: "Bengaluru, Karnataka",
      Status: "active",
      Date_Posted: "14 Feb 1956"

    },
    {
      JOB_ID: "id_004",
      Job_Title: "Java Developer",
      Location: "Mumbai, Karnataka",
      Status: "active",
      Date_Posted: "21 Dec 2023"

    },
    {
      JOB_ID: "id_005",
      Job_Title: "UI Intern",
      Location: "TamilNadu",
      Status: "closed",
      Date_Posted: "22 Jan 2023"

    }
  ]


  tabKey: any = []
  tabValue: any = []
  getData() {
    this.array.forEach((element: any) => {
      this.tabKey = Object.keys(element)
      this.tabValue.push(Object.values(element))
    });


  }
  onClick(value: any) {
    console.log('Here is Your Data')
    console.log("YOUR DATA IS : ", value);



  }

  change: boolean = true

 sortMeAsc(){
    console.log("asc")
    this.change = !this.change
    this.array = this.array.sort((a: any, b: any) => {
      const dateA = new Date(a.Date_Posted).getTime();
      const dateB = new Date(b.Date_Posted).getTime();

      return dateA - dateB;


    });
   
  }
  sortMeDsc() {
    console.log("desc")
    this.change = !this.change
    this.array = this.array.sort((a: any, b: any) => {
      const dateA = new Date(a.Date_Posted).getTime();
      const dateB = new Date(b.Date_Posted).getTime();

      return dateB - dateA;
    })
    
  }


}