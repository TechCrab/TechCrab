import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoblComponent } from './jobl.component';

describe('JoblComponent', () => {
  let component: JoblComponent;
  let fixture: ComponentFixture<JoblComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check title',()=>{
    let title='mjsjsjsjs'
    expect(title).toMatch('mjs')

  })
});
