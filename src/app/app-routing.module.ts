import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessPanelComponent } from './components/processComponents/process-panel/process-panel.component';
import { ProcessCreateComponent } from './components/processComponents/process-create/process-create.component';
import { ProcessAreaComponent } from './components/processComponents/process-area/process-area.component';
import { LoginComponent } from './components/login/login.component';
import { MAmbitoComponent } from './components/management/components/m-ambito/m-ambito.component';
import { MVaraComponent } from './components/management/components/m-vara/m-vara.component';
import { MFaseComponent } from './components/management/components/m-fase/m-fase.component';
// import { MAreaDoDireitoComponent } from './components/management/components/m-area-direito/m-area-direito.component';
// import { MTipoDeAcaoComponent } from './components/management/components/m-tipo-acao/m-tipo-acao.component';
import { MForoTribunalOrgaoComponent } from './components/management/components/m-foro-tribunal-orgao/m-foro-tribunal-orgao.component';

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
    path: 'painel-processos/processo-detalhes/:id',
    component: ProcessAreaComponent
  }
  ,
  {
    path: 'gestao/ambito',
    component: MAmbitoComponent
  }
  ,
  {
    path: 'gestao/vara',
    component: MVaraComponent
  }
  ,
  {
    path: 'gestao/fase',
    component: MFaseComponent
  }
  // ,
  // // {
  // //   path: 'gestao/area-do-direito',
  // //   component: MAreaDoDireitoComponent
  // // }
  // // ,
  // // {
  // //   path: 'gestao/tipo-de-acao',
  // //   component: MTipoDeAcaoComponent
  // // }
  ,
  {
    path: 'gestao/foro-tribunal-orgao',
    component: MForoTribunalOrgaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
