import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';

@Component({
  selector: 'app-dialog-delete-parte-contraria',
  templateUrl: './dialog-delete-parte-contraria.component.html',
  styleUrls: ['./dialog-delete-parte-contraria.component.scss']
})

export class DialogDeleteParteContrariaComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private ParteContrariaService: ParteContrariaService,
    public dialogRef: MatDialogRef<DialogDeleteParteContrariaComponent>
  ) { }

  deleteParteContriaRequest: ProcessoParteContraria = {
    ID: '',
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

  componentName: number = 0;

  swapTabs(componentName: number): void {
    this.componentName = componentName;
  }

  ngOnInit(): void {
    this.ParteContrariaService.getProcessoParteContraria(this.removeData.id).subscribe({
      next: (response) => {
        this.deleteParteContriaRequest = response;
        this.componentName = response.PF_PJ;
      },
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }

  deleteParteContraria() {
    this.ParteContrariaService.deleteParteContraria(this.removeData.id)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(true);
        },
        error: (response) => {
          console.log(response)
        }
      });
  }
} 
