import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';
import { MParteContrariaComponent } from '../m-parte-contraria.component';
import { ProcessoLogAlteracoes } from 'src/app/models/PROCESSO_LOG_ALTERACOES.model';
import { ProcessoLogAlteracoesService } from 'src/app/services/processo-log-alteracoes.service';

@Component({
  selector: 'app-dialog-link-parte-contraria',
  templateUrl: './dialog-link-parte-contraria.component.html',
  styleUrls: ['./dialog-link-parte-contraria.component.scss']
})
export class DialogLinkParteContrariaComponent implements OnInit {

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public linkableData: any,
    private ParteContrariaService: ParteContrariaService,
    public dialogRef: MatDialogRef<MParteContrariaComponent>,
    private LogAlteracoesService: ProcessoLogAlteracoesService
  ) { }

  NUMERO_PROCESSO: string | String = this.linkableData.numero_processo;

  linkParteContrariaForm!: FormGroup;

  linkableParteContrariaRequest: ProcessoParteContraria = {
    ID_PROCESSO: '',
    PF_PJ: 0,
    NOME: '',
    NOME_FANTASIA: '',
    CPF: '',
    CNPJ: '',
    RG: '',
    ENDERECO: '',
    CEP: '',
    NUMERO: 0,
    COMPLEMENTO: '',
    ESTADO: '',
    PAIS: '',
    CIDADE: '',
    OBSERVACAO: '',
    CARGO: '',
    DATA_ADMISSAO: '',
    DATA_DEMISSAO: '',
    ULTIMO_SALARIO: 0,
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
    this.linkParteContrariaForm = new FormGroup({
      NUMERO_PROCESSO: new FormControl('', [Validators.required])
    });

    this.ParteContrariaService.getProcessoParteContraria(this.linkableData.id)
      .subscribe({
        next: (response: ProcessoParteContraria) => {
          this.linkableParteContrariaRequest = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });

  }

  linkParteContraria() {
    this.ParteContrariaService.linkParteContraria(this.linkableParteContrariaRequest, this.NUMERO_PROCESSO)
      .subscribe({
        next: (response: any) => {
          this.dialogRef.close(true);
          if (response.processModifiedInformation[0] != undefined) {
            const modifiedItem = response.processModifiedInformation[0]['PARTE_CONTRARIA']
            this.createLogProcessoRequest.VALOR_ORIGINAL = modifiedItem['VALOR_ORIGINAL'];
            this.createLogProcessoRequest.VALOR_ATUAL = modifiedItem['VALOR_ATUAL'];
            this.createLogProcessoRequest.INPUT_ALTERADO = 'PARTE_CONTRARIA ';
            this.createLogProcessoRequest.NOME_USUARIO = 'TESTE';

            this.addLogAfterLink(response.ID_PROCESSO)
          }

          this.router.navigate(['/painel-processos', 'processo-detalhes', response.ID_PROCESSO])
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }

  addLogAfterLink(id_processo: string) {
    this.LogAlteracoesService.addLogProcesso(id_processo, this.createLogProcessoRequest)
      .subscribe({
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}