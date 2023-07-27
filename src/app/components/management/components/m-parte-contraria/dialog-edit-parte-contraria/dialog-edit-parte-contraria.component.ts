import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      NOME: new FormControl('', [Validators.required]),
      // NOME_FANTASIA: new FormControl('', [Validators.required]),
      CPF: new FormControl('', [Validators.required]),
      // CNPJ: new FormControl('', [Validators.required]),
      RG: new FormControl('', [Validators.required]),
      ENDERECO: new FormControl('', [Validators.required]),
      CEP: new FormControl('', [Validators.required]),
      NUMERO: new FormControl(0, [Validators.required]),
      COMPLEMENTO: new FormControl('', [Validators.required]),
      // ESTADO: new FormControl('', [Validators.required]),
      // CIDADE: new FormControl('', [Validators.required]),
      // PAIS: new FormControl('', [Validators.required]),
      // OBSERVACAO: new FormControl('', [Validators.required]),
      CARGO: new FormControl('', [Validators.required]),
      DATA_ADMISSAO: new FormControl('', [Validators.required]),
      DATA_DEMISSAO: new FormControl('', [Validators.required]),
      ULTIMO_SALARIO: new FormControl(0, [Validators.required]),
    });
  }

  updateParteContria() {
    if (this.updateParteContriaForm.valid) {
      this.updateParteContriaRequest.NOME_FANTASIA = this.updateData.value;
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
