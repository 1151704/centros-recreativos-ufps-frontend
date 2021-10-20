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
    InicioMapaComponent
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
