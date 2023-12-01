import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessPanelComponent } from './components/processComponents/process-panel/process-panel.component';
import { ProcessCreateComponent } from './components/processComponents/process-create/process-create.component';
import { ProcessAreaComponent } from './components/processComponents/process-area/process-area.component';
import { MAmbitoComponent } from './components/management/components/m-ambito/m-ambito.component';
import { MVaraComponent } from './components/management/components/m-vara/m-vara.component';
import { MPatronoResponsavelComponent } from './components/management/components/m-patrono-responsavel/m-patrono-responsavel.component';
import { MAreaDoDireitoComponent } from './components/management/components/m-area-do-direito/m-area-do-direito.component';
import { MTipoDeAcaoComponent } from './components/management/components/m-tipo-de-acao/m-tipo-de-acao.component';
import { MForoTribunalOrgaoComponent } from './components/management/components/m-foro-tribunal-orgao/m-foro-tribunal-orgao.component';
import { MTipoDeAndamentoComponent } from './components/management/components/m-tipo-de-andamento/m-tipo-de-andamento.component';
import { MEmpresasComponent } from './components/management/components/m-empresas/m-empresas.component';
import { MParteContrariaComponent } from './components/management/components/m-parte-contraria/m-parte-contraria.component';
import { ProcessEditComponent } from './components/processComponents/process-edit/process-edit.component';
import { ProcessAlterationsLogComponent } from './components/processComponents/process-alterations-log/process-alterations-log.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'painel-processos',
    component: ProcessPanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'log-alteracoes/:id',
    component: ProcessAlterationsLogComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'painel-processos/busca-avancada',
    component: ProcessPanelComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'criar-processo',
    component: ProcessCreateComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'editar-processo/:id',
    component: ProcessEditComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'painel-processos/processo-detalhes/:id',
    component: ProcessAreaComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gestao/ambito',
    component: MAmbitoComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gestao/vara',
    component: MVaraComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gestao/patrono-responsavel',
    component: MPatronoResponsavelComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gestao/area-do-direito',
    component: MAreaDoDireitoComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gestao/tipo-de-acao',
    component: MTipoDeAcaoComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gestao/foro-tribunal-orgao',
    component: MForoTribunalOrgaoComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gestao/tipo-de-andamento',
    component: MTipoDeAndamentoComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gestao/empresas',
    component: MEmpresasComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'gestao/parte-contraria',
    component: MParteContrariaComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
