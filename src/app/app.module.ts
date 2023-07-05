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
import { MFaseComponent } from './components/management/components/m-fase/m-fase.component';
import { MForoTribunalOrgaoComponent } from './components/management/components/m-foro-tribunal-orgao/m-foro-tribunal-orgao.component';

// Dialog & Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { DialogEditAmbitoComponent } from './components/management/components/m-ambito/dialog-edit-ambito/dialog-edit-ambito.component';
import { DialogDeleteAmbitoComponent } from './components/management/components/m-ambito/dialog-delete-ambito/dialog-delete-ambito.component';
import { DialogAddAmbitoComponent } from './components/management/components/m-ambito/dialog-add-ambito/dialog-add-ambito.component';

import { DialogDeleteFaseComponent } from './components/management/components/m-fase/dialog-delete-fase/dialog-delete-fase.component';
import { DialogAddFaseComponent } from './components/management/components/m-fase/dialog-add-fase/dialog-add-fase.component';
import { DialogEditFaseComponent } from './components/management/components/m-fase/dialog-edit-fase/dialog-edit-fase.component';

import { DialogEditVaraComponent } from './components/management/components/m-vara/dialog-edit-vara/dialog-edit-vara.component';
import { DialogDeleteVaraComponent } from './components/management/components/m-vara/dialog-delete-vara/dialog-delete-vara.component';
import { DialogAddVaraComponent } from './components/management/components/m-vara/dialog-add-vara/dialog-add-vara.component';

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
    MFaseComponent,
    MForoTribunalOrgaoComponent,

    DialogEditAmbitoComponent,
    DialogDeleteAmbitoComponent,
    DialogAddAmbitoComponent,

    DialogEditVaraComponent,
    DialogDeleteVaraComponent,
    DialogAddVaraComponent,

    DialogAddFaseComponent,
    DialogDeleteFaseComponent,
    DialogEditFaseComponent,

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
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
