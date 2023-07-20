import { Component, OnInit } from '@angular/core';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-parte-contraria',
  templateUrl: './dialog-add-parte-contraria.component.html',
  styleUrls: ['./dialog-add-parte-contraria.component.scss']
})
export class DialogAddParteContrariaComponent implements OnInit {
  constructor(
    private ParteContrariaService: ParteContrariaService,
    public dialogRef: MatDialogRef<DialogAddParteContrariaComponent>,
  ) { }

  createParteContrariaForm!: FormGroup;

  createParteContrariaRequest: ProcessoParteContraria = {
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
    NUMERO: '',
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
    this.createParteContrariaForm = new FormGroup({
      PARTECONTRARIA: new FormControl('', [Validators.required])
    });
  }

  createParteContraria() {
    if (this.createParteContrariaForm.valid) {
      this.ParteContrariaService.createParteContraria(this.createParteContrariaRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
            this.createParteContrariaForm.reset();
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
