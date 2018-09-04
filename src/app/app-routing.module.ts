import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component'; 

const routes:Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'signup',component:SignupComponent},
  {path:'home',component:ProductcomponentComponent}
]



@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
 
})
export class AppRoutingModule { }
