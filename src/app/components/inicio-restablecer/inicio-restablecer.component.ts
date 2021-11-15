import { ApiService } from './../../services/api.service';
import { NAME_APP } from './../../url.constants';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../services/auth/token-storage.service';
import { AuthService } from './../../services/auth/auth.service';
import { AuthLoginRestablecer } from './../../auth/login-info-restablecer';
import { Component, OnInit } from '@angular/core';
import { AuthLoginInfo } from 'src/app/auth/login-info';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio-restablecer',
  templateUrl: './inicio-restablecer.component.html',
  styleUrls: ['./inicio-restablecer.component.css']
})
export class InicioRestablecerComponent implements OnInit {

  checkoutForm: any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  private loginInfo: AuthLoginRestablecer;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle(`${NAME_APP} - Restablecer`);
    this.checkoutForm = this.formBuilder.group({
      identificacion: '',
      correo: '',
    });
    this.isLoggedIn = false;
    this.authService.isLoggedIn().subscribe(data => {
      if (data) {
        this.isLoggedIn = true;
        this.router.navigate(['/main']);
      }
    })
  }

  onSubmit(customerData: any) {
    this.errorMessage = '';
    this.isLoginFailed = false;
    this.loginInfo = new AuthLoginRestablecer(customerData.identificacion, customerData.correo);
    Swal.fire({
      title: 'Procesando datos',
      allowOutsideClick: false,
      onBeforeOpen: () => Swal.showLoading()
    });
    const attemptAuth = this.authService.restablecer(this.loginInfo);

    if (attemptAuth) {
      attemptAuth.subscribe(
        data => {          
          Swal.fire('Contraseña restablecida', `Se ha enviado un correo electronico, con los pasos a seguir para restablecer su contraseña, verifica la bandeja de Spam.`, 'success');
          this.router.navigate(['/inicio/signin']);
        },
        error => {
          this.apiService.notifService.error("Error", error);
          Swal.close();
        }
      );
    }
  }

}
