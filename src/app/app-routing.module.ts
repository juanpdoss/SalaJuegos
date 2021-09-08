import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { RegistroComponent } from './registro/registro.component';

//defino las rutas
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutMe', component: QuienSoyComponent },
  { path: 'mayorMenor', component: MayorMenorComponent },
  { path: 'preguntados', component: PreguntadosComponent },
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'registrarse', component: RegistroComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];
//asterisco asterisco que no sea vacio -> la ruta no es login o no es home -> pa el error

@NgModule({
  imports: [RouterModule.forRoot(routes)], //routeo base a nivel root
  exports: [RouterModule],
})
export class AppRoutingModule {}
