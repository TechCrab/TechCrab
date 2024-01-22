import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { JoblistComponent } from './joblist.component';


describe('JoblistComponent', () => {
  let component: JoblistComponent;
  let fixture: ComponentFixture<JoblistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change to false',()=>{

    let val=component.change
    component.sortMeAsc
    expect(val).toBe(false)
  })

  it('change to true',()=>{

    let val=component.change
    component.sortMeDsc
    expect(val).toBe(false)
  })

  it('check sorted array',()=>{
    let arr=component.array

    component.sortMeDsc()

    let desc=component.array

    expect(desc).toEqual([
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
  
      },
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
  
      }
    ])

  })
  

  it('check sorted array asc',()=>{
    let arr=component.array

    let change=component.change


    component.sortMeAsc()

    let asc=component.array
    expect(change).toBeFalsy();
    expect(asc).toEqual([
      {
        JOB_ID: "id_003",
        Job_Title: "Angular DEVELOPER",
        Location: "Bengaluru, Karnataka",
        Status: "active",
        Date_Posted: "14 Feb 1956"
  
      },
      {
        JOB_ID: "id_002",
        Job_Title: "Backend Developer",
        Location: "Bengaluru, Karnataka",
        Status: "closed",
        Date_Posted: "02 Aug 1993"
  
      },
      {
        JOB_ID: "id_001",
        Job_Title: "Jr.UI Developer",
        Location: "Bengaluru, Karnataka",
        Status: "active",
        Date_Posted: "22 Dec 2003"
  
      },
      {
        JOB_ID: "id_005",
        Job_Title: "UI Intern",
        Location: "TamilNadu",
        Status: "closed",
        Date_Posted: "22 Jan 2023"
  
      },
      {
        JOB_ID: "id_004",
        Job_Title: "Java Developer",
        Location: "Mumbai, Karnataka",
        Status: "active",
        Date_Posted: "21 Dec 2023"
  
      }
    ])

  })



});

