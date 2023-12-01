import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/USUARIO.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  showHeader: boolean = true;

  userRequest: Usuario = {
    ID_USUARIO: '',
    NOME_USUARIO: '',
    ACESSO_GESTAO: 0
  }

  ngOnInit(): void {
    const userModel = this.loginService.getUserModel();

    if (userModel)
      this.userRequest = {
        ID_USUARIO: JSON.parse(userModel).ID_USUARIO,
        NOME_USUARIO: JSON.parse(userModel).NOME_USUARIO,
        ACESSO_GESTAO: JSON.parse(userModel).ACESSO_GESTAO
      }
  }

  singOut() {
    this.loginService.signOut()
  }
}
