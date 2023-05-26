import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessPanelComponent } from './components/processComponents/process-panel/process-panel.component';
import { ProcessCreateComponent } from './components/processComponents/process-create/process-create.component';

const routes: Routes = [
  {
    path: 'painel-processos', component: ProcessPanelComponent
  },
  {
    path: 'criar-processo', component: ProcessCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
