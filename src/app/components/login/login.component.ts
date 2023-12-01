import { HttpErrorResponse } from '@angular/common/http';
import { Component, ComponentRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/USUARIO.model';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
    if (loginService.isAuthenticated()) {
      this.router.navigate(['/painel-processos'])
    }
  }

  componentRef!: ComponentRef<HeaderComponent>;

  requestUsuario: Usuario = {
    NOME_USUARIO: '',
    SENHA: '',
    ACESSO_GESTAO: 0
  }

  usuarioLogin!: Usuario;

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      NOME_USUARIO: new FormControl('', [Validators.required]),
      SENHA: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.loginService.postLogin(this.requestUsuario)
      .subscribe({
        next: (loginResponse: any) => {
          this.loginService.saveToken(loginResponse.token);
          this.loginService.saveUserModel(loginResponse.usuarionDTO)
          this.usuarioLogin = this.loginService.getDecodedAccessToken()!


          this.router.navigate(['/painel-processos']);

        },
        error: (err: HttpErrorResponse) => {
          Swal.fire("Erro", "Senha ou usuário incorreto", "error");
        },
      })
  }

}
