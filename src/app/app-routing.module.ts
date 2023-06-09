import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessPanelComponent } from './components/processComponents/process-panel/process-panel.component';
import { ProcessCreateComponent } from './components/processComponents/process-create/process-create.component';
import { ProcessAreaComponent } from './components/processComponents/process-area/process-area.component';
import { LoginComponent } from './components/login/login.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
