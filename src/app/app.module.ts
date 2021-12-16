import { TokenInterceptor } from './core/interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { NotificacionService } from './services/notificacion.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioSignInComponent } from './components/inicio-sign-in/inicio-sign-in.component';
import { MainComponent } from './components/main/main.component';
import { MainInicioComponent } from './components/main-inicio/main-inicio.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { InicioMapaComponent } from './components/inicio-mapa/inicio-mapa.component';
import { MainUsuariosComponent } from './components/main-usuarios/main-usuarios.component';
import { MainCentrosRecreativosComponent } from './components/main-centros-recreativos/main-centros-recreativos.component';
import { MainPerfilComponent } from './components/main-perfil/main-perfil.component';
import { MainUsuarioEditarComponent } from './components/main-usuario-editar/main-usuario-editar.component';
import { MainUsuarioRegistrarComponent } from './components/main-usuario-registrar/main-usuario-registrar.component';
import { MainCentrosRecreativosRegistrarComponent } from './components/main-centros-recreativos-registrar/main-centros-recreativos-registrar.component';
import { MainCentrosRecreativosEditarComponent } from './components/main-centros-recreativos-editar/main-centros-recreativos-editar.component';
import { MainComunasComponent } from './components/main-comunas/main-comunas.component';
import { MainComunaAddComponent } from './components/main-comuna-add/main-comuna-add.component';
import { DetalleCentroComponent } from './components/modals/detalle-centro/detalle-centro.component';
import { InicioRestablecerComponent } from './components/inicio-restablecer/inicio-restablecer.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent,
    InicioComponent,
    InicioSignInComponent,
    MainComponent,
    MainInicioComponent,
    MainFooterComponent,
    MainHeaderComponent,
    MainMenuComponent,
    InicioMapaComponent,
    MainUsuariosComponent,
    MainCentrosRecreativosComponent,
    MainPerfilComponent,
    MainUsuarioEditarComponent,
    MainUsuarioRegistrarComponent,
    MainCentrosRecreativosRegistrarComponent,
    MainCentrosRecreativosEditarComponent,
    MainComunasComponent,
    MainComunaAddComponent,
    DetalleCentroComponent,
    InicioRestablecerComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NotificacionService, ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
