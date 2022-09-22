import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { LoanComponent } from './loan/loan.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'',component:MainhomeComponent},
  {path:'reg',component:UserloginComponent},
  {path:'account',component:AccountComponent},
  {path:'loan',component:LoanComponent},
  {path:'loginad',component:LoginadminComponent},
  {path:'add',component:AddmemberComponent}
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
