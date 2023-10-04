import { ProcessSearchbarComponent } from './components/processComponents/process-searchbar/process-searchbar.component';
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
import { ProcessCreateComponent } from './components/processComponents/process-create/process-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProcessAreaDetailsComponent } from './components/processComponents/process-area/process-area-details/process-area-details.component';
import { ProcessAreaOpposingpartyComponent } from './components/processComponents/process-area/process-area-opposingparty/process-area-opposingparty.component';
import { ProcessAreaAcordoComponent } from './components/processComponents/process-area/process-area-acordo/process-area-acordo.component';
import { ProcessAreaAndamentoComponent } from './components/processComponents/process-area/process-area-andamento/process-area-andamento.component';
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

import { DialogAddAndamentoComponent } from './components/processComponents/process-area/process-area-andamento/dialog-add-andamento/dialog-add-andamento.component';

import { DialogAddAcordoComponent } from './components/processComponents/process-area/process-area-acordo/dialog-add-acordo/dialog-add-acordo.component';
import { DialogEditAcordoComponent } from './components/processComponents/process-area/process-area-acordo/dialog-edit-acordo/dialog-edit-acordo.component';
import { DialogViewAcordoComponent } from './components/processComponents/process-area/process-area-acordo/dialog-view-acordo/dialog-view-acordo.component';

import { MTipoDeAndamentoComponent } from './components/management/components/m-tipo-de-andamento/m-tipo-de-andamento.component';

import { DialogDeleteTipoDeAndamentoComponent } from './components/management/components/m-tipo-de-andamento/dialog-delete-tipo-de-andamento/dialog-delete-tipo-de-andamento.component';
import { DialogEditTipoDeAndamentoComponent } from './components/management/components/m-tipo-de-andamento/dialog-edit-tipo-de-andamento/dialog-edit-tipo-de-andamento.component';
import { DialogAddTipoDeAndamentoComponent } from './components/management/components/m-tipo-de-andamento/dialog-add-tipo-de-andamento/dialog-add-tipo-de-andamento.component';

import { DialogViewAndamentoComponent } from './components/processComponents/process-area/process-area-andamento/dialog-view-andamento/dialog-view-andamento.component';
import { DialogEditAndamentoComponent } from './components/processComponents/process-area/process-area-andamento/dialog-edit-andamento/dialog-edit-andamento.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { MParteContrariaComponent } from './components/management/components/m-parte-contraria/m-parte-contraria.component';
import { MEmpresasComponent } from './components/management/components/m-empresas/m-empresas.component';
import { DialogAddParteContrariaComponent } from './components/management/components/m-parte-contraria/dialog-add-parte-contraria/dialog-add-parte-contraria.component';
import { DialogDeleteParteContrariaComponent } from './components/management/components/m-parte-contraria/dialog-delete-parte-contraria/dialog-delete-parte-contraria.component';
import { DialogEditParteContriaComponent } from './components/management/components/m-parte-contraria/dialog-edit-parte-contraria/dialog-edit-parte-contraria.component';
import { DialogAddEmpresasComponent } from './components/management/components/m-empresas/dialog-add-empresas/dialog-add-empresas.component';
import { DialogDeleteEmpresasComponent } from './components/management/components/m-empresas/dialog-delete-empresas/dialog-delete-empresas.component';
import { DialogEditEmpresasComponent } from './components/management/components/m-empresas/dialog-edit-empresas/dialog-edit-empresas.component';
import { DialogViewParteContrariaComponent } from './components/management/components/m-parte-contraria/dialog-view-parte-contraria/dialog-view-parte-contraria.component';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ProcessEditComponent } from './components/processComponents/process-edit/process-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessSearchbarComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,

    LoginComponent,

    ProcessContainerComponent,
    ProcessAreaComponent,
    ProcessPanelComponent,
    ProcessCreateComponent,
    // ProcessCreateProgressComponent,
    // ProcessCreateAgreementComponent,
    ProcessAreaDetailsComponent,
    ProcessAreaOpposingpartyComponent,
    ProcessAreaAcordoComponent,
    ProcessAreaAndamentoComponent,
    ProcessAreaPreviousPatronsComponent,

    MAmbitoComponent,
    MVaraComponent,
    MForoTribunalOrgaoComponent,
    MAreaDoDireitoComponent,
    MTipoDeAcaoComponent,
    MPatronoResponsavelComponent,
    MEmpresasComponent,
    MTipoDeAndamentoComponent,
    MParteContrariaComponent,

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

    DialogAddAndamentoComponent,

    DialogAddAcordoComponent,
    DialogEditAcordoComponent,
    DialogViewAcordoComponent,

    DialogDeleteTipoDeAndamentoComponent,
    DialogEditTipoDeAndamentoComponent,
    DialogAddTipoDeAndamentoComponent,

    DialogViewAndamentoComponent,
    DialogEditAndamentoComponent,

    DialogAddParteContrariaComponent,
    DialogDeleteParteContrariaComponent,
    DialogEditParteContriaComponent,

    DialogAddEmpresasComponent,
    DialogDeleteEmpresasComponent,
    DialogEditEmpresasComponent,
    DialogViewParteContrariaComponent,
    ProcessEditComponent
  ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    NgSelectModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})

export class AppModule { }
