import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ManagementGuard {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(): boolean {
    const userModel: any = this.loginService.getUserModel();
    let isAcessoGestao: number = JSON.parse(userModel).ACESSO_GESTAO

    if (userModel && (isAcessoGestao == 1)) {
      return true;
    } else {
      this.router.navigate(['/painel-processos'])
      Swal.fire("Erro", "Você não tem permissão de acesso aos módulos de gestão.", "error");
      return false;
    }

  }

}

export const managementGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ManagementGuard).canActivate();
}
