import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoLogAlteracoes } from 'src/app/models/PROCESSO_LOG_ALTERACOES.model';
import { ProcessoLogAlteracoesService } from 'src/app/services/processo-log-alteracoes.service';
import { ProcessoService } from 'src/app/services/processo.service';

@Component({
  selector: 'app-dialog-change-status-process',
  templateUrl: './dialog-change-status-process.component.html',
  styleUrls: ['./dialog-change-status-process.component.scss']
})
export class DialogChangeStatusProcessComponent implements OnInit {

  constructor(
    private ProcessoService: ProcessoService,
    private LogAlteracoesService: ProcessoLogAlteracoesService,
    @Inject(MAT_DIALOG_DATA) public statusData: any,
    public dialogRef: MatDialogRef<DialogChangeStatusProcessComponent>
  ) { }

  updateProcessoBaixaProvisoriaForm!: FormGroup;
  updateProcessoEncerramentoForm!: FormGroup;

  componentName: string = '';

  swapTabs(componentName: string) {
    this.componentName = componentName;

    this.updateProcessRequest = {
      MOTIVO_ENCERRAMENTO: '',
      MOTIVO_BAIXA_PROVISORIA: ''
    }
  }

  updateProcessRequest = {
    MOTIVO_ENCERRAMENTO: '',
    MOTIVO_BAIXA_PROVISORIA: ''
  }

  createLogProcessoRequest: ProcessoLogAlteracoes = {
    ID_PROCESSO: '',
    ID_USUARIO: '',
    NOME_USUARIO: '',
    VALOR_ORIGINAL: '',
    VALOR_ATUAL: '',
    INPUT_ALTERADO: '',
    DATA_ALTERACAO: ''
  }

  ngOnInit(): void {
    this.componentName = this.statusData.status;

    this.updateProcessoBaixaProvisoriaForm = new FormGroup({
      MOTIVO_BAIXA_PROVISORIA: new FormControl('', [Validators.required])
    });

    this.updateProcessoEncerramentoForm = new FormGroup({
      MOTIVO_ENCERRAMENTO: new FormControl('', [Validators.required])
    });
  }

  updateStatusBaixaProvisoria() {
    if (this.updateProcessoBaixaProvisoriaForm.valid) {
      this.ProcessoService.updateProcessBaixaProvisoria(this.statusData.id_processo, this.updateProcessRequest.MOTIVO_BAIXA_PROVISORIA)
        .subscribe({
          next: (response: any) => {
            this.dialogRef.close(true);
            if (response.processoModifiedInformation[0] != undefined) {
              const modifiedItem = response.processoModifiedInformation[0]['MOTIVO_BAIXA_PROVISORIA']
              this.createLogProcessoRequest.VALOR_ORIGINAL = modifiedItem['VALOR_ORIGINAL'];
              this.createLogProcessoRequest.VALOR_ATUAL = modifiedItem['VALOR_ATUAL'];
              this.createLogProcessoRequest.INPUT_ALTERADO = 'MOTIVO_BAIXA_PROVISORIA ';
              this.createLogProcessoRequest.NOME_USUARIO = 'TESTE';

              this.addLogAfterLink(this.statusData.id_processo)
            }
          },
          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
  }

  updateStatusEncerramento() {
    if (this.updateProcessoEncerramentoForm.valid) {
      this.ProcessoService.updateProcessEncerramento(this.statusData.id_processo, this.updateProcessRequest.MOTIVO_ENCERRAMENTO)
        .subscribe({
          next: (response: any) => {
            this.dialogRef.close(true);
            if (response.processoModifiedInformation[0] != undefined) {
              const modifiedItem = response.processoModifiedInformation[0]['MOTIVO_ENCERRAMENTO']
              this.createLogProcessoRequest.VALOR_ORIGINAL = modifiedItem['VALOR_ORIGINAL'];
              this.createLogProcessoRequest.VALOR_ATUAL = modifiedItem['VALOR_ATUAL'];
              this.createLogProcessoRequest.INPUT_ALTERADO = 'MOTIVO_ENCERRAMENTO ';
              this.createLogProcessoRequest.NOME_USUARIO = 'TESTE';

              this.addLogAfterLink(this.statusData.id_processo)
            }
          },
          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
  }

  addLogAfterLink(id_processo: string) {
    this.LogAlteracoesService.addLogProcesso(id_processo, this.createLogProcessoRequest)
      .subscribe({
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}
