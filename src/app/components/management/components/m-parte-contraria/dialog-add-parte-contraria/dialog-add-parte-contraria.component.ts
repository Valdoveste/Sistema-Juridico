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
    public dialogRef: MatDialogRef<DialogAddParteContrariaComponent>
  ) { }

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
    this.createParteContrariaFisicalForm = new FormGroup({
      NOME: new FormControl('', [Validators.required]),
      CPF: new FormControl('', [Validators.required]),
      RG: new FormControl('', [Validators.required]),
      ENDERECO: new FormControl('', [Validators.required]),
      CEP: new FormControl('', [Validators.required]),
      NUMERO: new FormControl(0, [Validators.required]),
      COMPLEMENTO: new FormControl('', [Validators.required]),
      CARGO: new FormControl('', [Validators.required]),
      DATA_ADMISSAO: new FormControl('', [Validators.required]),
      DATA_DEMISSAO: new FormControl('', [Validators.required]),
      ULTIMO_SALARIO: new FormControl(0, [Validators.required]),
    });

    this.createParteContrariaLegalForm = new FormGroup({
      NOME: new FormControl('', [Validators.required]),
      NOME_FANTASIA: new FormControl('', [Validators.required]),
      CNPJ: new FormControl('', [Validators.required]),
      ENDERECO: new FormControl('', [Validators.required]),
      CEP: new FormControl('', [Validators.required]),
      NUMERO: new FormControl(0, [Validators.required]),
      COMPLEMENTO: new FormControl('', [Validators.required]),
      ESTADO: new FormControl('', [Validators.required]),
      CIDADE: new FormControl('', [Validators.required]),
      PAIS: new FormControl('', [Validators.required]),
      OBSERVACAO: new FormControl('', [Validators.required]),
    });
  }

  componentName: string = '';

  swapTabs(componentName: string): void {
    this.componentName = componentName;
  }

  createParteContrariaFisicalForm!: FormGroup;

  createParteContrariaFisical() {
    if (this.createParteContrariaFisicalForm.valid) {
      this.createParteContrariaRequest.PF_PJ = 0;
      this.ParteContrariaService.createParteContraria(this.createParteContrariaRequest)
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

  onPersonRGChange() {
    this.createParteContrariaRequest.RG = this.createParteContrariaRequest.RG!.replace(/\D/g, '');
    this.createParteContrariaRequest.RG = this.createParteContrariaRequest.RG.replace(/(\d{2})(\d)/, '$1.$2');
    this.createParteContrariaRequest.RG = this.createParteContrariaRequest.RG.replace(/(\d{3})(\d)/, '$1.$2');
    this.createParteContrariaRequest.RG = this.createParteContrariaRequest.RG.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  onPersonCPFChange() {
    this.createParteContrariaRequest.CPF = this.createParteContrariaRequest.CPF!.replace(/\D/g, '');
    this.createParteContrariaRequest.CPF = this.createParteContrariaRequest.CPF.replace(/(\d{3})(\d)/, '$1.$2');
    this.createParteContrariaRequest.CPF = this.createParteContrariaRequest.CPF.replace(/(\d{3})(\d)/, '$1.$2');
    this.createParteContrariaRequest.CPF = this.createParteContrariaRequest.CPF.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }


  createParteContrariaLegalForm!: FormGroup;

  createParteContrariaLegal() {
    if (this.createParteContrariaLegalForm.valid) {
      this.createParteContrariaRequest.PF_PJ = 1;
      this.ParteContrariaService.createParteContraria(this.createParteContrariaRequest)
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

  onPersonCNPJChange() {
    this.createParteContrariaRequest.CNPJ = this.createParteContrariaRequest.CNPJ.replace(/\D/g, '');
    this.createParteContrariaRequest.CNPJ = this.createParteContrariaRequest.CNPJ.replace(/(\d{2})(\d)/, '$1.$2');
    this.createParteContrariaRequest.CNPJ = this.createParteContrariaRequest.CNPJ.replace(/(\d{3})(\d)/, '$1.$2');
    this.createParteContrariaRequest.CNPJ = this.createParteContrariaRequest.CNPJ.replace(/(\d{3})(\d)/, '$1/$2');
    this.createParteContrariaRequest.CNPJ = this.createParteContrariaRequest.CNPJ.replace(/(\d{4})(\d)/, '$1-$2');
  }
}
