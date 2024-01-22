import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
// import { ContactComponent } from './contact/contact.component';
// import { AboutComponent } from './about/about.component';
// import { PracticeComponent } from './practice/practice.component';
import { FormsComponent } from './forms/forms.component';
import { JoblistComponent } from './joblist/joblist.component';
import { JoblComponent } from './jobl/jobl.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  {path:'signin',component:FormsComponent},
  {path:'joblist',component:JoblistComponent},
  {path:'postjob',component:JoblComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
