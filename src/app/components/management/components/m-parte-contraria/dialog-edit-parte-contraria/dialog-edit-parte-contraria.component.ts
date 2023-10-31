import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';

@Component({
  selector: 'app-dialog-edit-parte-contraria',
  templateUrl: './dialog-edit-parte-contraria.component.html',
  styleUrls: ['./dialog-edit-parte-contraria.component.scss']
})
export class DialogEditParteContriaComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private ParteContrariaService: ParteContrariaService,
    public dialogRef: MatDialogRef<DialogEditParteContriaComponent>,
  ) { }


  componentName: number = 0;

  swapTabs(componentName: number): void {
    this.componentName = componentName;
  }

  updateParteContriaForm!: FormGroup;

  updateParteContriaRequest: ProcessoParteContraria = {
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

  ngOnInit(): void {
    this.updateParteContriaForm = new FormGroup({
      NOME: new FormControl('',),
      NOME_FANTASIA: new FormControl('',),
      CPF: new FormControl('',),
      CNPJ: new FormControl('',),
      RG: new FormControl('',),
      ENDERECO: new FormControl('',),
      CEP: new FormControl('',),
      NUMERO: new FormControl(0,),
      COMPLEMENTO: new FormControl('',),
      ESTADO: new FormControl('',),
      CIDADE: new FormControl('',),
      PAIS: new FormControl('',),
      OBSERVACAO: new FormControl('',),
      CARGO: new FormControl('',),
      DATA_ADMISSAO: new FormControl('',),
      DATA_DEMISSAO: new FormControl('',),
      ULTIMO_SALARIO: new FormControl(0,),
    });

    this.ParteContrariaService.getParteContraria(this.updateData.id).subscribe({
      next: (response) => {
        this.updateParteContriaRequest = response;
        this.componentName = response.PF_PJ;
      }
    }
    )

  }

  updateParteContria() {
    if (this.updateParteContriaForm.valid) {
      this.ParteContrariaService.updateParteContraria(this.updateData.id, this.updateParteContriaRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
