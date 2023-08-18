import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessPanelComponent } from './components/processComponents/process-panel/process-panel.component';
import { ProcessCreateComponent } from './components/processComponents/process-create/process-create.component';
import { ProcessAreaComponent } from './components/processComponents/process-area/process-area.component';
import { LoginComponent } from './components/login/login.component';
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

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'painel-processos',
    component: ProcessPanelComponent
  },

  {
    path: 'criar-processo',
    component: ProcessCreateComponent
  },

  {
    path: 'editar-processo/:id',
    component: ProcessEditComponent
  },

  {
    path: 'painel-processos/processo-detalhes/:id',
    component: ProcessAreaComponent
  },

  {
    path: 'gestao/ambito',
    component: MAmbitoComponent
  },

  {
    path: 'gestao/vara',
    component: MVaraComponent
  },

  {
    path: 'gestao/patrono-responsavel',
    component: MPatronoResponsavelComponent
  },
  
  {
    path: 'gestao/area-do-direito',
    component: MAreaDoDireitoComponent
  },

  {
    path: 'gestao/tipo-de-acao',
    component: MTipoDeAcaoComponent
  },

  {
    path: 'gestao/foro-tribunal-orgao',
    component: MForoTribunalOrgaoComponent
  },

  {
    path: 'gestao/tipo-de-andamento',
    component: MTipoDeAndamentoComponent
  },

  {
    path: 'gestao/empresas',
    component: MEmpresasComponent
  },

  {
    path: 'gestao/parte-contraria',
    component: MParteContrariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
