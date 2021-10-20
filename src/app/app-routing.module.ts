import { InicioMapaComponent } from './components/inicio-mapa/inicio-mapa.component';
import { MainInicioComponent } from './components/main-inicio/main-inicio.component';
import { MainComponent } from './components/main/main.component';
import { InicioSignInComponent } from './components/inicio-sign-in/inicio-sign-in.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent,
    children: [
      { path: "", component: InicioMapaComponent },
      { path: "signin", component: InicioSignInComponent },
      { path: "mapas", component: InicioMapaComponent }
    ]
  },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  {
    path: "main",
    component: MainComponent,
    children: [
      { path: "", component: MainInicioComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }