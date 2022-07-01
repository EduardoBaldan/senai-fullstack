import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { Playstation1Component } from './views/playstation1/playstation1.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path:"login", component: LoginComponent },
  { path:"playstation1", component: Playstation1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
