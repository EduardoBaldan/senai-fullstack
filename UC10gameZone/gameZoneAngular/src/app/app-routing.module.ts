import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { LoginComponent } from './views/login/login.component';
import { NoticiasComponent } from './views/noticias/noticias.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login",component: LoginComponent },
  { path: "consoles", component: ConsolesComponent },
  { path: "jogos", component: JogosComponent },
  { path: "noticias", component: NoticiasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
