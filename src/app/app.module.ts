import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProcessContainerComponent } from './components/processComponents/process-container/process-container.component';
import { ProcessAreaComponent } from './components/processComponents/process-area/process-area.component';
import { ProcessPanelComponent } from './components/processComponents/process-panel/process-panel.component';
import { ProcessSearchbarComponent } from './components/processComponents/process-searchbar/process-searchbar.component';
import { ProcessCreateComponent } from './components/processComponents/process-create/process-create.component';
import { ProcessCreateProgressComponent } from './components/processComponents/process-create/process-create-progress/process-create-progress.component';
import { ProcessCreateAgreementComponent } from './components/processComponents/process-create/process-create-agreement/process-create-agreement.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProcessAreaDetailsComponent } from './components/processComponents/process-area/process-area-details/process-area-details.component';
import { ProcessAreaOpposingpartyComponent } from './components/processComponents/process-area/process-area-opposingparty/process-area-opposingparty.component';
import { LoginComponent } from './components/login/login.component';
import { ProcessAreaDealComponent } from './components/processComponents/process-area/process-area-deal/process-area-deal.component';
import { ProcessAreaMovementComponent } from './components/processComponents/process-area/process-area-movement/process-area-movement.component';
import { ManagementComponent } from './components/management/management.component';
import { ProcessAreaPreviousPatronsComponent } from './components/processComponents/process-area/process-area-previous-patrons/process-area-previous-patrons.component';
import { MAmbitoComponent } from './components/management/components/m-ambito/m-ambito.component';
import { MVaraComponent } from './components/management/components/m-vara/m-vara.component';
import { MFaseComponent } from './components/management/components/m-fase/m-fase.component';
import { MAreaDireitoComponent } from './components/management/components/m-area-direito/m-area-direito.component';
import { MTipoAcaoComponent } from './components/management/components/m-tipo-acao/m-tipo-acao.component';
import { MForoTribunalOrgaoComponent } from './components/management/components/m-foro-tribunal-orgao/m-foro-tribunal-orgao.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ProcessContainerComponent,
    ProcessAreaComponent,
    ProcessPanelComponent,
    ProcessSearchbarComponent,
    ProcessCreateComponent,
    ProcessCreateProgressComponent,
    ProcessCreateAgreementComponent,
    ProcessAreaDetailsComponent,
    ProcessAreaOpposingpartyComponent,
    LoginComponent,
    ProcessAreaDealComponent,
    ProcessAreaMovementComponent,
    ManagementComponent,
    ProcessAreaPreviousPatronsComponent,
    MAmbitoComponent,
    MVaraComponent,
    MFaseComponent,
    MAreaDireitoComponent,
    MTipoAcaoComponent,
    MForoTribunalOrgaoComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
