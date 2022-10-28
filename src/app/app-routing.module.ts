import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './vews/footer/footer.component';
import { HomeComponent } from './vews/home/home.component';
import { LoginComponent } from './component/login/login.component';

import { NavbarComponent } from './vews/navbar/navbar.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path: "navbar", component:NavbarComponent},
  { path: "footer" , component:FooterComponent},
  { path: "login" , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
