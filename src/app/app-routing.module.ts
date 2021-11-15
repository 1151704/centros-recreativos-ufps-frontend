import { InicioRestablecerComponent } from './components/inicio-restablecer/inicio-restablecer.component';
import { MainComunasComponent } from './components/main-comunas/main-comunas.component';
import { MainComunaAddComponent } from './components/main-comuna-add/main-comuna-add.component';
import { MainCentrosRecreativosRegistrarComponent } from './components/main-centros-recreativos-registrar/main-centros-recreativos-registrar.component';
import { MainCentrosRecreativosEditarComponent } from './components/main-centros-recreativos-editar/main-centros-recreativos-editar.component';
import { MainCentrosRecreativosComponent } from './components/main-centros-recreativos/main-centros-recreativos.component';
import { MainUsuarioRegistrarComponent } from './components/main-usuario-registrar/main-usuario-registrar.component';
import { MainUsuariosComponent } from './components/main-usuarios/main-usuarios.component';
import { MainPerfilComponent } from './components/main-perfil/main-perfil.component';
import { InicioMapaComponent } from './components/inicio-mapa/inicio-mapa.component';
import { MainInicioComponent } from './components/main-inicio/main-inicio.component';
import { MainComponent } from './components/main/main.component';
import { InicioSignInComponent } from './components/inicio-sign-in/inicio-sign-in.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUsuarioEditarComponent } from './components/main-usuario-editar/main-usuario-editar.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent,
    children: [
      { path: "", component: InicioMapaComponent },
      { path: "signin", component: InicioSignInComponent },
      { path: "restablecer", component: InicioRestablecerComponent },
      { path: "mapas", component: InicioMapaComponent }
    ]
  },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  {
    path: "main",
    component: MainComponent,
    children: [
      { path: "", component: MainInicioComponent },
      
      { path: "usuarios", component: MainUsuariosComponent },
      { path: "usuario-edit", component: MainUsuarioEditarComponent },
      { path: "usuario-add", component: MainUsuarioRegistrarComponent },
      { path: "perfil", component: MainPerfilComponent },
      
      { path: "comunas", component: MainComunasComponent },
      { path: "comuna-add", component: MainComunaAddComponent },

      { path: "centros", component: MainCentrosRecreativosComponent },
      { path: "centro-edit", component: MainCentrosRecreativosEditarComponent },
      { path: "centro-add", component: MainCentrosRecreativosRegistrarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
