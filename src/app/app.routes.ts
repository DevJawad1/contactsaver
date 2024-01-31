import { Routes } from '@angular/router';
import { FirstWorkComponent } from './first-work/first-work.component';
import path from 'path';
import { DisplaucontactComponent } from './displaucontact/displaucontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';

export const routes: Routes = [
  {path:'', component:FirstWorkComponent},
  {path:'home', redirectTo:'', pathMatch:'full'},
  {path:'service', component:ServicecomponentComponent},
  {path:'dashboard', children:[
    {path:'', component:DisplaucontactComponent},
    {path:'view/:id', component:EditcontactComponent},
  ]},
  // {path:'display/:index', component:DisplaucontactComponent},
  {path:'**', component:ErrorpageComponent}
];
