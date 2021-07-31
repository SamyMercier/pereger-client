import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';
import { NotFoundPageComponent } from './not-found/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: "login", component: LoginPageComponent},
  {path: "home", component: HomePageComponent},
  {path: "", component: HomePageComponent},
  {path: "**", component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
