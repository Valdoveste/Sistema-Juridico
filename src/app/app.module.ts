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
