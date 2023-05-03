import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessPanelComponent } from './components/processComponents/process-panel/process-panel.component';
import { ProcessSectionComponent } from './components/processComponents/process-section/process-section.component';

const routes: Routes = [
  {
    path: '', component: ProcessPanelComponent
  },
  
  {
    path: 'panel', component: ProcessSectionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
