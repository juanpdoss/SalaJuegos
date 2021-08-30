import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'AboutMe', component: QuienSoyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
