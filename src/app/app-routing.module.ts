import { registerLocaleData } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResidentialComponent } from './residential/residential.component';

const routes: Routes = [
   { path:'registration',component:RegistrationComponent},
   { path:'loginpage',component:LoginpageComponent},
   { path:'index',component:IndexComponent},
   { path:'residential',component:ResidentialComponent},
   {path:'',redirectTo:'loginpage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
