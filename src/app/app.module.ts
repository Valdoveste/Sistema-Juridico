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
import { ProcessSectionComponent } from './components/processComponents/process-section/process-section.component';
import { ProcessCreateComponent } from './components/processComponents/process-create/process-create.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProcessCreateOpposingpartyComponent } from './components/processComponents/process-create/process-create-opposingparty/process-create-opposingparty.component';
import { ProcessCreateProcessdetailsComponent } from './components/processComponents/process-create/process-create-processdetails/process-create-processdetails.component';
import { ProcessCreateProgressComponent } from './components/processComponents/process-create/process-create-progress/process-create-progress.component';
import { ProcessCreateAgreementComponent } from './components/processComponents/process-create/process-create-agreement/process-create-agreement.component';
import { HttpClientModule } from '@angular/common/http';

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
    ProcessSectionComponent,
    ProcessCreateComponent,
    ModalComponent,
    ProcessCreateOpposingpartyComponent,
    ProcessCreateProcessdetailsComponent,
    ProcessCreateProgressComponent,
    ProcessCreateAgreementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
