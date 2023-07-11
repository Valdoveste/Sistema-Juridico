import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ProcessAreaDealComponent } from './components/processComponents/process-area/process-area-deal/process-area-deal.component';
import { ProcessAreaMovementComponent } from './components/processComponents/process-area/process-area-movement/process-area-movement.component';
import { ProcessAreaPreviousPatronsComponent } from './components/processComponents/process-area/process-area-previous-patrons/process-area-previous-patrons.component';

// Managements components
import { MAmbitoComponent } from './components/management/components/m-ambito/m-ambito.component';
import { MVaraComponent } from './components/management/components/m-vara/m-vara.component';
import { MPatronoResponsavelComponent } from './components/management/components/m-patrono-responsavel/m-patrono-responsavel.component';
import { MForoTribunalOrgaoComponent } from './components/management/components/m-foro-tribunal-orgao/m-foro-tribunal-orgao.component';
import { MAreaDoDireitoComponent } from './components/management/components/m-area-do-direito/m-area-do-direito.component';
import { MTipoDeAcaoComponent } from './components/management/components/m-tipo-de-acao/m-tipo-de-acao.component';

// Dialog & Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

import { DialogEditAmbitoComponent } from './components/management/components/m-ambito/dialog-edit-ambito/dialog-edit-ambito.component';
import { DialogDeleteAmbitoComponent } from './components/management/components/m-ambito/dialog-delete-ambito/dialog-delete-ambito.component';
import { DialogAddAmbitoComponent } from './components/management/components/m-ambito/dialog-add-ambito/dialog-add-ambito.component';

import { DialogAddPatronoResponsavelComponent } from './components/management/components/m-patrono-responsavel/dialog-add-patrono-responsavel/dialog-add-patrono-responsavel.component';
import { DialogEditPatronoResponsavelComponent } from './components/management/components/m-patrono-responsavel/dialog-edit-patrono-responsavel/dialog-edit-patrono-responsavel.component';
import { DialogDeletePatronoResponsavelComponent } from './components/management/components/m-patrono-responsavel/dialog-delete-patrono-responsavel/dialog-delete-patrono-responsavel.component';

import { DialogEditVaraComponent } from './components/management/components/m-vara/dialog-edit-vara/dialog-edit-vara.component';
import { DialogDeleteVaraComponent } from './components/management/components/m-vara/dialog-delete-vara/dialog-delete-vara.component';
import { DialogAddVaraComponent } from './components/management/components/m-vara/dialog-add-vara/dialog-add-vara.component';

import { DialogAddForoTribunalOrgaoComponent } from './components/management/components/m-foro-tribunal-orgao/dialog-add-foro-tribunal-orgao/dialog-add-foro-tribunal-orgao.component';
import { DialogDeleteForoTribunalOrgaoComponent } from './components/management/components/m-foro-tribunal-orgao/dialog-delete-foro-tribunal-orgao/dialog-delete-foro-tribunal-orgao.component';
import { DialogEditForoTribunalOrgaoComponent } from './components/management/components/m-foro-tribunal-orgao/dialog-edit-foro-tribunal-orgao/dialog-edit-foro-tribunal-orgao.component';

import { DialogAddAreaDoDireitoComponent } from './components/management/components/m-area-do-direito/dialog-add-area-do-direito/dialog-add-area-do-direito.component';
import { DialogDeleteAreaDoDireitoComponent } from './components/management/components/m-area-do-direito/dialog-delete-area-do-direito/dialog-delete-area-do-direito.component';
import { DialogEditAreaDoDireitoComponent } from './components/management/components/m-area-do-direito/dialog-edit-area-do-direito/dialog-edit-area-do-direito.component';

import { DialogAddTipoDeAcaoComponent } from './components/management/components/m-tipo-de-acao/dialog-add-tipo-de-acao/dialog-add-tipo-de-acao.component';
import { DialogDeleteTipoDeAcaoComponent } from './components/management/components/m-tipo-de-acao/dialog-delete-tipo-de-acao/dialog-delete-tipo-de-acao.component';
import { DialogEditTipoDeAcaoComponent } from './components/management/components/m-tipo-de-acao/dialog-edit-tipo-de-acao/dialog-edit-tipo-de-acao.component';
import { ProcessCreateLegalPersonComponent } from './components/processComponents/process-create/process-create-legal-person/process-create-legal-person.component';
import { ProcessCreateFisicalPersonComponent } from './components/processComponents/process-create/process-create-fisical-person/process-create-fisical-person.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,

    LoginComponent,

    ProcessContainerComponent,
    ProcessAreaComponent,
    ProcessPanelComponent,
    ProcessSearchbarComponent,
    ProcessCreateComponent,
    ProcessCreateProgressComponent,
    ProcessCreateAgreementComponent,
    ProcessAreaDetailsComponent,
    ProcessAreaOpposingpartyComponent,
    ProcessAreaDealComponent,
    ProcessAreaMovementComponent,
    ProcessAreaPreviousPatronsComponent,

    MAmbitoComponent,
    MVaraComponent,
    MForoTribunalOrgaoComponent,
    MAreaDoDireitoComponent,
    MTipoDeAcaoComponent,
    MPatronoResponsavelComponent,

    DialogEditAmbitoComponent,
    DialogDeleteAmbitoComponent,
    DialogAddAmbitoComponent,

    DialogEditVaraComponent,
    DialogDeleteVaraComponent,
    DialogAddVaraComponent,

    DialogAddPatronoResponsavelComponent,
    DialogDeletePatronoResponsavelComponent,
    DialogEditPatronoResponsavelComponent,

    DialogAddForoTribunalOrgaoComponent,
    DialogDeleteForoTribunalOrgaoComponent,
    DialogEditForoTribunalOrgaoComponent,

    DialogAddAreaDoDireitoComponent,
    DialogDeleteAreaDoDireitoComponent,
    DialogEditAreaDoDireitoComponent,

    DialogAddTipoDeAcaoComponent,
    DialogDeleteTipoDeAcaoComponent,
    DialogEditTipoDeAcaoComponent,

    ProcessCreateLegalPersonComponent,
    ProcessCreateFisicalPersonComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
